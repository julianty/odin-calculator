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
  if (b == 0) {
    return "How dare you."
  }
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
    case 'x':
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

function appendText (displayText, buttonText) {
  // Checks for decimal points
  if (buttonText == '.' && displayText.includes('.')) {
    console.log("A '.' already exists");
  } 
  // Checks for leading 0
  else if (displayText == "0" && buttonText != '.') {
    displayText = buttonText;
  } 
  else {
    if (buffer != null && lastKeyClass == "operator") {
      displayText = buttonText;
    } else {
      displayText = displayText + buttonText;
    }
  }


  return displayText
}

function displayController (event) {
  const buttonClass = event.target.classList.value;
  const buttonText = event.target.textContent;
  let displayText = display.textContent;

  if (buttonClass == "numpad") {
    displayText = appendText(displayText, buttonText);
  }

  if (buttonClass == "operator") {
    // Checks for '='
    // There must be a number in the buffer
    if (buffer != null) {
      displayText = operate(buffer, parseFloat(displayText), operatorBuffer);
      buffer = displayText;
      operatorBuffer = buttonText;
    }
    else {
      buffer = parseFloat(displayText);
      operatorBuffer = buttonText;
    }
  }

  if (buttonClass == "clear") {
    displayText = "0";
    buffer = null;
    operatorBuffer = null;
  }
  display.textContent = displayText;
  lastKeyClass = buttonClass;
}



const display = document.querySelector("#display p");
const buttonList = document.querySelectorAll('button');
let buffer = null;
let operatorBuffer = null;
let lastKeyClass;
// console.log(buttonList);

buttonList.forEach( button => {
  button.addEventListener('click', e => displayController(e));
});