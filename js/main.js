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

//lägg till en lyssnare på sidan
searchform.addEventListener('submit', function(event) {
    event.preventDefault(); //sidan laddar om
   
const search = searchInput.value.trim();  //mellanslag bort
errorElement.textContent = "";
messageElement.textContent = "";
recipeElement.innerHTML = "";

if (search.length > 0) {
    errorElement.textContent = "Ange en sökfras...";
    return;
    }
