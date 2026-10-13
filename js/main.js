"use strict"; 
/*
 * Laboration 6 - Receptsökaren
 * Namn: DITT NAMN
 */

//lyssnare på sidan
//value
//hantering av värden
//api-anrop med async JSON

//hämta id från HTML

const searchform = document.getElementById("searchform");
const searchInput = document.getElementById("search");
const searchButton = document.getElementById("searchbutton");
const message = document.getElementById("message");
const recipe = document.getElementById("recipe");
const error = document.getElementById("error");

const jsonUrl = "https://dummyjson.com/recipes/search?q=";

//lägg till en lyssnare på sidan
searchform.addEventListener('submit',async function(event) {
    event.preventDefault(); //sidan laddar om
   
const search = searchInput.value.trim();  //mellanslag bort
errorElement.textContent = "";
messageElement.textContent = "";
recipeElement.innerHTML = "";

//om fältet är tomt

if (search.length > 0) {
    errorElement.textContent = 'Ange en sökfras för att söka';
    return; 
    } 

    //try catch

    try {
        const response = await fetch (jsonUrl + search);
        const data = await response.json();
        
        //om det inte finns recept
        if (data.length === 0) {
            errorElement.textContent = "Inget recept hittades.";
            return; 
        } catch (error) {
            errorElement.textContent = "Något gick fel, försök igen";
            return; 
        }
// en array från registeret. där det ska landa receptet

        let firstRecipe = data[0];

renderRecipe(firstRecipe); 

} catch (error) {
    errorElement.textContent = "Något gick fel, försök igen";
    return; 
});


