let num1 = 5
let num2 = 10
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let display=document.getElementById("sum-el")

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on corresponding the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

function add(){
    let sum= num1+num2
    display.textContent=sum
}
function subtract(){
    let sum=num1-num2
    display.textContent=sum
}
function divide(){
    let sum=num1/num2
    display.textContent=sum
}
function multiply(){
    let sum=num1*num2
    display.textContent=sum
}
