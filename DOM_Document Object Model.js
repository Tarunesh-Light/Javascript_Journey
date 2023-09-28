/*
DOM-Document Object Model
Used to access properties of HTML from JavaScript ie.,acts as an interconnection between HTML and JavaScript
*/

let name=document.getElementById("name");           //Gets the complete HTML element
name.innerHTML="Name Changed";
console.log(name);

console.log(document.getElementById(numb).value);   //Gets the value of the HTML element