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
const messageElement = document.getElementById("message");
const recipeElement = document.getElementById("recipe");
const errorElement = document.getElementById("error");

const jsonUrl = "https://dummyjson.com/recipes/search?q=";

//lägg till en lyssnare på sidan
searchform.addEventListener('submit',async function(event) {
    event.preventDefault(); //sidan laddar om
   
const search = searchInput.value.trim();  //mellanslag bort
errorElement.textContent = "";
messageElement.textContent = "";
recipeElement.innerHTML = "";

//om fältet är tomt

if (search.length === 0) {
    errorElement.textContent = 'Ange en sökfras för att söka';
    return; 
    }  

    //try catch api anrop

    try {
        const response = await fetch ('https://dummyjson.com/recipes/search?q=' + encodeURIComponent(search));
        const data = await response.json();    //översätter json till html
        
        //om det inte finns recept
        if (!response.ok) {
            throw new Error('Not Found');
        }

  // om receptet inte finns i listan
        if(!data.recipes.length) {
            errorElement.textContent = "Inget recept hittades";
            return;
        }

//första receptet i banken
const firstRecipe = data.recipes[0]; 
        
        renderRecipe(firstRecipe); //till dom rendering av receptet

    } catch (error) {
        messageElement.textContent = 'Ett fel uppstod vid hämtningen. Försök igen senare.';
        console.log(error);
    }
    }); 

    //function för recepten 
    function renderRecipe(recipe) { 
    let ingredientsHTML = "";
    for (let i = 0; i < recipe.ingredients.length; i++) {
        let item = recipe.ingredients[i];
        ingredientsHTML + `<li>` + item.name + `</li>`;
        }  

        //function för att lägga till ingredienser
        let instructionsHTML = "";
            for (let i = 0; i < recipe.instructions.length; i++) {
                let item = recipe.instructions[i];
                instructionsHTML + `<li>` + item.text + `</li>`;
                }


    
    
    
        // Skapa huvudelementet artikel
    const article = document.createElement('article');

    const titel = document.createElement ('h3');
    titel.textcontent = recipe.name;



    
