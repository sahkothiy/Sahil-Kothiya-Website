const boxes = document.querySelectorAll(".box");
const resetButton = document.querySelector("#resetBtn");
const newGameButtons = document.querySelectorAll(".newBtn");
const winnerText = document.querySelector(".winner-text");
const winnerPanel = document.querySelector(".winner");
const drawPanel = document.querySelector(".draw");
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let isXTurn = true;
let gameOver = false;

const resetGame = () => {
  isXTurn = true;
  gameOver = false;
  boxes.forEach((box) => {
    box.textContent = "";
    box.disabled = false;
  });
  winnerPanel.style.display = "none";
  drawPanel.style.display = "none";
};

const getWinner = () => {
  for (const pattern of winPatterns) {
    const [first, second, third] = pattern.map(
      (index) => boxes[index].textContent,
    );
    if (first && first === second && first === third) return first;
  }
  return null;
};

const finishTurn = () => {
  const winner = getWinner();
  if (winner) {
    gameOver = true;
    winnerText.textContent = `Winner: ${winner}`;
    winnerPanel.style.display = "flex";
    boxes.forEach((box) => {
      box.disabled = true;
    });
  } else if ([...boxes].every((box) => box.textContent)) {
    gameOver = true;
    drawPanel.style.display = "flex";
  }
};

newGameButtons.forEach((button) => button.addEventListener("click", resetGame));
resetButton.addEventListener("click", resetGame);
boxes.forEach((box) =>
  box.addEventListener("click", () => {
    if (gameOver) return;
    box.textContent = isXTurn ? "X" : "O";
    box.disabled = true;
    isXTurn = !isXTurn;
    finishTurn();
  }),
);
