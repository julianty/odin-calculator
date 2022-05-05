function add (a, b) {
  return a + b
}

function subtract (a, b) {
  return a -b
}

function multiply (a, b) {
  return a * b
}

function divide (a, b) {
  return a / b
}

function operate (a, b, operation) {
  switch (operation) {
    case '+':
      return add(a,b)
      break;
    case '-':
      return subtract(a,b)
      break;
    case '*':
      return multiply(a,b)
      break;
    case '/':
      return divide(a,b)
      break;
    default:
      console.log("Could not find operator");
      return
  };
}

function displayController (event) {
  console.log(event.target);
}

const display = document.querySelector("#display p");
const buttonList = document.querySelectorAll('button');
// console.log(buttonList);

buttonList.forEach( button => {
  button.addEventListener('click', e => displayController(e));
});