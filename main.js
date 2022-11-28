"use strict";

let result = document.getElementById("result");
result.innerHTML = "0";

function getLastSymbol() {
  const symbols = ["+", "-", "*", "/", "."];

  for (let i = 0; i < symbols.length; i++) {
    if (result.innerHTML.slice(-1).includes(symbols[i])) {
      result.innerHTML = result.innerHTML.slice(0, -1);
    }
  }
}

function clickButton(button) {
  let buttonValue = button.innerHTML;

  switch (buttonValue) {
    case "AC":
      result.innerHTML = "0";
      break;
    case "=":
      if (result.innerHTML == "") {
        return;
      }
      getLastSymbol();
      result.innerHTML = eval(result.innerHTML);
      break;
    case "+":
      getLastSymbol();
      result.innerHTML += buttonValue;
      break;
    case "-":
      getLastSymbol();
      result.innerHTML += buttonValue;
      break;
    case "*":
      getLastSymbol();
      result.innerHTML += buttonValue;
      break;
    case "/":
      getLastSymbol();
      result.innerHTML += buttonValue;
      break;
    case ".":
      getLastSymbol();
      result.innerHTML += buttonValue;
      break;
    default:
      if (result.innerHTML == 0) {
        result.innerHTML = buttonValue;
      } else {
        result.innerHTML += buttonValue;
      }
  }

  if (result.innerHTML === "00") {
    result.innerHTML = "0";
  }
}
