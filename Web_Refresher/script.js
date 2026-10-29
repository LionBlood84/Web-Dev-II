const countDisplay = document.getElementById("water-count");
const feedbackDisplay = document.getElementById("counter-feedback");
const btnIncrement = document.getElementById("btn-increment");
const btnDecrement = document.getElementById("btn-decrement");
const btnReset = document.getElementById("btn-reset");

let count = 0;
const targetGoal = 8;

function updateUI() {
  countDisplay.textContent = count;

  if (count === 0) {
    feedbackDisplay.textContent = "Start logging your water intake!";
  } else if (count < targetGoal) {
    const remaining = targetGoal - count;
    feedbackDisplay.textContent = `${remaining} more glass${remaining > 1 ? "es" : ""} to reach your goal.`;
  } else {
    feedbackDisplay.textContent = "Goal reached! Excellent hydration today.";
  }
}

btnIncrement.addEventListener("click", () => {
  count++;
  updateUI();
});

btnDecrement.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateUI();
  }
});

btnReset.addEventListener("click", () => {
  count = 0;
  updateUI();
});