/*  Variables declared with var, let and const of different data types. - Done
    Named, anonymous and built in functions  - Done
    If/ else and switch conditional statements - Done
    Arrays of different data types - Done
    Loops through an array - Done*/
//Declaring a variable and printing console log if variable is unchanged
var answerToEverything = 42;
if (answerToEverything == 42){
    console.log("42!");
} else{
    console.log("Error, not 42!");
}
//Doing maths on the above variable and verifying if completed successfully
var result = answerToEverything + 2;
if(result == 44){
    console.log("Mathematics completed successfully!");
}else{
    console.log("Error, I can't do maths!");
}
//Linking a function to a button that changes the HTML on click
var stringTheory = "Quantum Mechanics!";
function string(){
    document.getElementById("StringTheory").innerHTML = stringTheory;
}
//Testing true and false variables
let letMeOut = true;
    if(letMeOut == false){
        console.log("No, you must stay");
    }else{
        console.log("You're free to go");
    }
//Creating const variable to complete the trio of var, let and const variables
const constantlyHandsome = "You are!";
function handsome(){
    document.getElementById("handsomeness").innerHTML = constantlyHandsome;
}
//Using built-in alert function when a button is pressed
function hi(){
    alert("HI!");
}
//anonymous function on window load
window.onload = function(){
    alert("Alert on page load")
}
//Switch conditional statement

function favPizza(){
    let favPizza = "Pepperoni";
switch(favPizza){
    case "Margherita":
    //    alert("Margherita");
    var pizzaText = document.getElementById("pizza")
    pizzaText.textContent = "Margherita"
    break;
    case "Pepperoni":
    //    alert("Pepperoni");
    //var pizzaText = document.getElementById("pizza")
    //pizzaText.textContent = "Pepperoni"
    document.getElementById("pizza").innerHTML = favPizza;
    break;
    case "Hawaiian":
    //    alert("Hawaiian");
    var pizzaText = document.getElementById("pizza")
    pizzaText.textContent = "Hawaiian"
    break;
    case "Meat Lovers":
    //    alert("Meat Lovers");
    var pizzaText = document.getElementById("pizza")
    pizzaText.textContent = "Meat Lovers"
    break;
}}
//Arrays of different data types
let tanks = ["Tiger", "Peregrine", "Lansen C"];
let tiers = [7, 8, 8];
//Loops through an array to display the array contents as a list
function blockList(){
var blocks = ["Dirt", "Cobblestone", "Diamond Ore", "Bedrock", "Obsidian"];    
let text = "";
for (let i=0; i < blocks.length; i++){
    text = text + blocks[i] + "<br>";
}
document.getElementById("blocklist").innerHTML = text;
/*var blockText = document.getElementById("blocklist")
blockText.textContent = text*/
console.log(blocks);}