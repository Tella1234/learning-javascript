// Output
const outputUpper = document.querySelector("#upper");
const outputLower = document.querySelector("#lower");

// function for getting numbers
function pressNum(e) {
  if (outputUpper.innerHTML === "0") {
    outputUpper.innerHTML = e.innerHTML;
  } else {
    outputUpper.innerHTML += e.innerHTML;
  }
}

// function for getting operators
function pressOperator(e) {
  let lastOperator = outputUpper.innerHTML.slice(-1);
  if (
    lastOperator === "+" ||
    lastOperator === "-" ||
    lastOperator === "*" ||
    lastOperator === "/"
  ) {
    output.innerHTML = outputUpper.innerHTML.slice(0, -1) + e.innerHTML;
  } else {
    outputUpper.innerHTML += e.innerHTML;
  }
}

// function to clear all
function pressAllClear() {
  outputUpper.innerHTML = "";
  outputLower.innerHTML = "0";
}

// function to delete one
function pressDelete() {
  outputUpper.innerHTML = outputUpper.innerHTML.slice(0, -1);
}

// function for dot
function pressDot() {
  outputUpper.innerHTML += ".";
}

// function to get answer
function pressEqual() {
  let exp = outputUpper.innerHTML;
  outputLower.innerHTML = exp;
  exp = exp.replace(/×/g, "*").replace(/÷/g, "/");
  let result;
  try {
    result = eval(exp);
    if (result.toString().indexOf(".") !== -1) {
      result = result.toFixed(3);
    }
  } catch (e) {
    result = "Syntax Error";
  }
  outputLower.innerHTML = result;
}

document.addEventListener("keydown", function (e) {
  switch (e.key) {
    case "0":
      pressNum(document.querySelector("button:nth-child(17)"));
      break;
    case "1":
      pressNum(document.querySelector("button:nth-child(13)"));
      break;
    case "2":
      pressNum(document.querySelector("button:nth-child(14)"));
      break;
    case "3":
      pressNum(document.querySelector("button:nth-child(15)"));
      break;
    case "4":
      pressNum(document.querySelector("button:nth-child(9)"));
      break;
    case "5":
      pressNum(document.querySelector("button:nth-child(10)"));
      break;
    case "6":
      pressNum(document.querySelector("button:nth-child(11)"));
      break;
    case "7":
      pressNum(document.querySelector("button:nth-child(5)"));
      break;
    case "8":
      pressNum(document.querySelector("button:nth-child(6)"));
      break;
    case "9":
      pressNum(document.querySelector("button:nth-child(7)"));
      break;
    case "+":
      pressOperator(document.querySelector("button:nth-child(16)"));
      break;
    case "-":
      pressOperator(document.querySelector("button:nth-child(12)"));
      break;
    case "*":
      pressOperator(document.querySelector("button:nth-child(8)"));
      break;
    case "/":
      pressOperator(document.querySelector("button:nth-child(3)"));
      break;
    case "%":
      pressOperator(document.querySelector("button:nth-child(19)"));
      break;
    case ".":
      pressDot();
      break;
    case "Enter":
      // prevent default action
      e.preventDefault();
      pressEqual();
      break;
    case "Backspace":
      pressDelete();
      break;
    case "Escape":
      pressAllClear();
      break;
  }
});
