const form = document.querySelector("#bmi-form");
const results = document.querySelector("#results");
const highlights = document.querySelectorAll(".highlight");

const COLORS = {
  reset: "#4a4a4a",
  underweight: "#ffa500",
  normal: "#32cd32",
  overweight: "#ff4500",
};

// Reset all highlight colors
function resetHighlights() {
  highlights.forEach((h) => (h.style.backgroundColor = COLORS.reset));
}

// Highlight category based on BMI
function highlightCategory(bmi) {
  resetHighlights();
  if (bmi < 18.6) {
    highlights[1].style.backgroundColor = COLORS.underweight; // Underweight
  } else if (bmi <= 24.9) {
    highlights[0].style.backgroundColor = COLORS.normal; // Normal
  } else {
    highlights[2].style.backgroundColor = COLORS.overweight; // Overweight
  }
}

// Calculate BMI
function calculateBMI(height, weight) {
  return (weight / ((height * height) / 10000)).toFixed(2);
}

// Form submit handler
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseFloat(document.querySelector("#height").value);
  const weight = parseFloat(document.querySelector("#weight").value);

  if (!height || height <= 0) {
    results.textContent = "⚠ Please enter a valid height";
    resetHighlights();
    return;
  }

  if (!weight || weight <= 0) {
    results.textContent = "⚠ Please enter a valid weight";
    resetHighlights();
    return;
  }

  const bmi = calculateBMI(height, weight);
  results.textContent = `Your BMI: ${bmi}`;
  highlightCategory(bmi);
});