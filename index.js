// Simple Counter Program

let countHeading = document.getElementById("countHeading");
let decreaseBtn = document.getElementById("decreaseBtn");
let resetBtn = document.getElementById("resetBtn");
let increaseBtn = document.getElementById("increaseBtn");
let count = 0;

function updateCountDisplay() {
  countHeading.textContent = count;
}

decreaseBtn.addEventListener("click", () => {
  count--;
  updateCountDisplay();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateCountDisplay();
});

increaseBtn.addEventListener("click", () => {
  count++;
  updateCountDisplay();
});

updateCountDisplay();
