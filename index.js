// Simple Counter Program

const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");
let temp;

console.log(toFahrenheit.checked);
function convert() {
  if (toFahrenheit.checked) {
    temp = +textBox.value;
    temp = (9 / 5) * temp + 32;
    result.textContent = temp.toFixed(2) + "°F";
  } else if (toCelcius.checked) {
    temp = +textBox.value;
    temp = (9 / 5) * temp - 32;
    result.textContent = temp.toFixed(2) + "°C";
  } else {
    result.textContent = "Select a unit";
  }
}
