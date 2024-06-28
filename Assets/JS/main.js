let boxes = document.querySelectorAll(".box");
let turn = "X";
let gameOver = false;

let pre = document.querySelector(".preloader");
window.onload = () => {
  pre.classList.add("hide");
};

boxes.forEach((e) => {
  e.innerHTML = "";
  e.addEventListener("click", () => {
    if (!gameOver && e.innerHTML === "") {
      e.innerHTML = turn;
      checkWin();
      checkDraw();
      changeTurn();
    }
  });
});

function changeTurn() {
  if (turn === "X") {
    turn = "O";
    document.querySelector(".bg").style.left = "85px";
  } else {
    turn = "X";
    document.querySelector(".bg").style.left = "0";
  }
}

function checkWin() {
  let winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winCondition.length; i++) {
    let win1 = boxes[winCondition[i][0]].innerHTML;
    let win2 = boxes[winCondition[i][1]].innerHTML;
    let win3 = boxes[winCondition[i][2]].innerHTML;
    if (win1 != "" && win1 === win2 && win1 === win3) {
      gameOver = true;
      document.querySelector("#result").innerHTML = turn + " Is" + " Win";
      document.querySelector("#again").style.display = "block";
      for (let j = 0; j < 3; j++) {
        boxes[winCondition[i][j]].style.backgroundColor = "aqua";
      }
    }
  }
}

function checkDraw() {
  if (!gameOver) {
    let isDraw = true;
    boxes.forEach((e) => {
      if (e.innerHTML === "") isDraw = false;
    });
    if (isDraw) {
      gameOver = true;
      document.querySelector("#result").innerHTML = "Draw";
      document.querySelector("#again").style.display = "block";
    }
  }
}
document.getElementById("again").addEventListener("click", () => {
  gameOver = false;
  turn = "X";
  document.querySelector(".bg").style.left = "0";
  document.querySelector("#result").innerHTML = "";
  document.querySelector("#again").style.display = "none";
  boxes.forEach((e) => {
    e.innerHTML = "";
    e.style.removeProperty("background-color");
    e.style.color = "#fff";
  });
});
