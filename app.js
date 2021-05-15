const buttons = document.querySelectorAll("button");
const equal = document.querySelector("#equal");
const firstNumber = document.querySelector(".first-number");
const lastNumber = document.querySelector(".last-number");
const operator = document.querySelector(".operator");
const result = document.querySelector(".result");

let validNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "."];

let operators = ["*", "/", "+", "-"];
// Calculate the operation
function claculate() {
  let parsedFirstNum = parseInt(firstNumber.innerHTML);
  let parsedLastNum = parseInt(lastNumber.innerHTML);
  if (operator.innerHTML == "*") {
    result.innerHTML = parsedFirstNum * parsedLastNum;
  } else if (operator.innerHTML == "/") {
    result.innerHTML = parsedFirstNum / parsedLastNum;
  } else if (operator.innerHTML == "+") {
    result.innerHTML = parsedFirstNum + parsedLastNum;
  } else if (operator.innerHTML == "-") {
    result.innerHTML = parsedFirstNum - parsedLastNum;
  }
}

// Trigger clicking on button
function triggerButtonClick() {
  buttons.forEach((button) => {
    button.onclick = (event) => {
      validNumbers.forEach((number) => {
        if (event.target.innerHTML.includes(number)) {
          if (operator.innerHTML.length === 0) {
            firstNumber.innerHTML += event.target.innerHTML;
          }
          return "";
        }
      });
      operators.forEach((operat) => {
        if (event.target.innerHTML.includes(operat)) {
          if (operator.innerHTML.length === 1) {
            return "";
          }
          operator.innerHTML += event.target.innerHTML;
        }
      });
      validNumbers.forEach((number) => {
        if (event.target.innerHTML.includes(number)) {
          if (operator.innerHTML.length === 1) {
            lastNumber.innerHTML += event.target.innerHTML;
          }
          return "";
        }
      });
      if (button.innerHTML === "=") {
        claculate();
      }
      if (button.textContent === "C") {
        firstNumber.innerHTML = "";
        lastNumber.innerHTML = "";
        operator.innerHTML = "";
        result.innerHTML = "";
      }
    };
  });
}

// Equal Button

triggerButtonClick();
