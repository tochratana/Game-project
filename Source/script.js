const board = document.getElementById("board");
const context = board.getContext("2d");
const blockSize = 20;
const cols = board.width / blockSize;
const rows = board.height / blockSize;
const inputSpeed = document.getElementById("inputSpeed");
const btnSpeed = document.getElementById("btnSpeed");
let score = 0; // Score variable

let snakeX, snakeY, velocityX, velocityY, snakeBody, foodX, foodY, gameOver;
var gameSpeed = 100; // Speed in milliseconds

function speed() {
    var valueOfSpeed = document.getElementById("inputSpeed").value;
    return Number(valueOfSpeed);
}

// Event listener for the button
document.getElementById("btnSpeed").addEventListener("click", () => {
    const valueOfSpeedNumber = speed();
    if (!isNaN(valueOfSpeedNumber) && valueOfSpeedNumber > 0) {
        gameSpeed = valueOfSpeedNumber; // Update gameSpeed with the new value
        console.log("Updated gameSpeed:", gameSpeed); // Log the updated value
    } else {
        console.log("Invalid input. Please enter a positive number.");
    }
});

// Function to get the current speed value (if needed)
function getFromSpeed() {
    return gameSpeed; // Return the current value of gameSpeed
}

// Example of using the getFromSpeed function
// console.log("Initial gameSpeed:", getFromSpeed()); // Log the initial gameSpeed



document.addEventListener("keydown", changeDirection);
//  add speed 
function initGame(addSpeed) {
  snakeX = blockSize * 5;
  snakeY = blockSize * 5;
  velocityX = 0;
  velocityY = 0;
  snakeBody = [];
  foodX = Math.floor(Math.random() * cols) * blockSize;
  foodY = Math.floor(Math.random() * rows) * blockSize;
  gameOver = false;
  score = 0;
  addSpeed = getFromSpeed();
}
setInterval(update, gameSpeed =  getFromSpeed());
// console.log("Initial gameSpeed:", getFromSpeed());
function update() {
  if (gameOver) {
    return;
  }

  context.fillStyle = "black";
  context.fillRect(0, 0, board.width, board.height);

  context.fillStyle = "red";
  context.fillRect(foodX, foodY, blockSize, blockSize);

  if (snakeX === foodX && snakeY === foodY) {
    snakeBody.push([foodX, foodY]);
    placeFood();
    score++; // Increase score
    document.getElementById("score").innerText = +score; // Update score display
  }

  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = snakeBody[i - 1];
  }
  if (snakeBody.length) {
    snakeBody[0] = [snakeX, snakeY];
  }

  snakeX += velocityX * blockSize;
  snakeY += velocityY * blockSize;

  context.fillStyle = "lime";
  context.fillRect(snakeX, snakeY, blockSize, blockSize);
  for (let i = 0; i < snakeBody.length; i++) {
    context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
  }

  // Game over condition
  if (
    snakeX < 0 ||
    snakeX >= cols * blockSize ||
    snakeY < 0 ||
    snakeY >= rows * blockSize
  ) {
    endGame();
  }

  for (let i = 0; i < snakeBody.length; i++) {
    if (snakeX === snakeBody[i][0] && snakeY === snakeBody[i][1]) {
      endGame();
    }
  }
}

function changeDirection(e) {
  if (e.code === "ArrowUp" && velocityY !== 1) {
    velocityX = 0;
    velocityY = -1;
  } else if (e.code === "ArrowDown" && velocityY !== -1) {
    velocityX = 0;
    velocityY = 1;
  } else if (e.code === "ArrowLeft" && velocityX !== 1) {
    velocityX = -1;
    velocityY = 0;
  } else if (e.code === "ArrowRight" && velocityX !== -1) {
    velocityX = 1;
    velocityY = 0;
  }
}

function placeFood() {
  foodX = Math.floor(Math.random() * cols) * blockSize;
  foodY = Math.floor(Math.random() * rows) * blockSize;
}

function endGame() {
  gameOver = true;
  //   document.getElementById("newGameBtn").style.display = "block"; // Show the "New Game" button
}

function startNewGame() {
  initGame(addSpeed); // Restart the game
}

initGame();

