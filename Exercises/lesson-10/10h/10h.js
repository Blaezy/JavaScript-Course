function costCalculate() {
  const inputElement = document.querySelector(".js-input");
  let cost = inputElement.value;

  if (cost <= 0){
    console.log(cost);
    document.querySelector(".js-totalCost").classList.add('error-text');
    document.querySelector(".js-totalCost").innerHTML = `Error: Cost can not be less than $0`;
    return;
  }
  
  cost = cost * 100;

  if (cost < 4000) {
    cost = cost + 1000;
  }

  cost = cost / 100;
  document.querySelector(".js-totalCost").classList.remove('error-text');
  document.querySelector(".js-totalCost").innerHTML = `Your Total Cost : $${cost}`;

}

function inputKeyDown(event) {
  if (event.key === "Enter") costCalculate();
}
