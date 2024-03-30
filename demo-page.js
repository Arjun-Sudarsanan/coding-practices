var dropdown1 = document.getElementById("flex-direction");
var dropdown2 = document.getElementById("justify-content");
var dropdown3 = document.getElementById("align-items");
var dropdown4 = document.getElementById("flex-wrap");
var dropdown5 = document.getElementById("align-content");
const targetElement = document.getElementsByClassName("inner-container")[0];

dropdown1.addEventListener("change", handleDropdownSelection);
dropdown2.addEventListener("change", handleDropdownSelection);
dropdown3.addEventListener("change", handleDropdownSelection);
dropdown4.addEventListener("change", handleDropdownSelection);
dropdown5.addEventListener("change", handleDropdownSelection);

function handleDropdownSelection(event){
var style = `${event.target.id}: ${event.target.value};`;
targetElement.setAttribute("style", style);
}
