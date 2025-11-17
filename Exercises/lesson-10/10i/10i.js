let calculator = localStorage.getItem("calculator") || "";

let displayCalc = document.querySelector(".js-calc-display");

showCalc();
function showCalc() {
  displayCalc.innerHTML = calculator;
}

console.log();

function updatedCalculation(buttonValue) {
  calculator = calculator + buttonValue;
  console.log(calculator);

  localStorage.setItem("calculator", calculator);
  // console.log(calculator);
  showCalc();
}

function equalButton() {
  calculator = eval(calculator);
  // console.log(total);
  // calculator = "";
  localStorage.setItem("calculator", calculator);
  showCalc();
}

function clearLog() {
  calculator = "";
  localStorage.setItem("calculator", calculator);
  showCalc();
}

// console.log(calculator);

function special(){
  alert("Don't do this again ");
}