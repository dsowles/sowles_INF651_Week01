
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";


//Basic var declaration example
let myVariable = "Bob";
myVariable = "Steve";


//Basic use of conditional statements
let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}


//Function statement declaration and use example
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }

  multiply(2,3)
  multiply(4,6)
  multiply(6.7)

//javascript event example
document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
});

let name = "David";

//example of event handling (lambda syntax)
/*
document.querySelector("html").addEventListener("click", () => {
    alert("Ouch! Stop poking me!");
  });
*/


  