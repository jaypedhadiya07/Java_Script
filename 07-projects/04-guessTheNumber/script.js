let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("🎯 Random number:", randomNumber);

const userInput = document.querySelector('#guessField');
const submitBtn = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const feedback = document.querySelector('.lowOrHi');
const resultArea = document.querySelector('.resultParas');

let guessCount = 1;
let isPlaying = true;

// ✅ Validate input
function validateGuess(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert('⚠ Please enter a number between 1 and 100');
    return false;
  }
  return true;
}

// ✅ Display message
function displayMessage(msg) {
  feedback.innerHTML = `<h2>${msg}</h2>`;
}

// ✅ Update guesses and remaining attempts
function updateGuesses(guess) {
  userInput.value = '';
  guessSlot.textContent += `${guess}, `;
  remaining.textContent = 10 - guessCount;
  guessCount++;
}

// ✅ Check if guess is correct or not
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('🎉 You guessed it right!');
    endGame();
  } else if (guess > randomNumber) {
    displayMessage('📈 Too high!');
  } else {
    displayMessage('📉 Too low!');
  }
}

// ✅ End game and show restart button
function endGame() {
  userInput.value = '';
  userInput.disabled = true;

  const newGameBtn = document.createElement('button');
  newGameBtn.textContent = 'Start New Game';
  newGameBtn.className = 'button';
  resultArea.appendChild(newGameBtn);

  isPlaying = false;

  newGameBtn.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log("🎯 New random number:", randomNumber);

    guessCount = 1;
    guessSlot.textContent = '';
    remaining.textContent = 10;
    feedback.textContent = '';
    userInput.disabled = false;
    resultArea.removeChild(newGameBtn);
    isPlaying = true;
  });
}

// ✅ Main event listener
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (!isPlaying) return;

  const guess = parseInt(userInput.value);
  if (!validateGuess(guess)) return;

  updateGuesses(guess);

  if (guessCount > 10 && guess !== randomNumber) {
    displayMessage(`💀 Game Over! The number was ${randomNumber}.`);
    endGame();
  } else {
    checkGuess(guess);
  }
});