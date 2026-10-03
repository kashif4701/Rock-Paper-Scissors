let userS = 0;
let compS = 0;

let choices = document.querySelectorAll(".choice");
let paraUser = document.querySelector("#you");
let paraComp = document.querySelector("#Comp");
let msg = document.querySelector("#msg");

let compFunction = () => {
  let option = ["rock", "paper", "scissor"];
  let randomIDX = Math.floor(Math.random() * 3);
  return option[randomIDX];
};

let draw = () => {
  console.log("Game Drawn");
  msg.innerText = "Game Drawn";
  msg.style.backgroundColor = "black";
};

let showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    console.log("UserWin");
    userS++;
    paraUser.innerText = userS;
    msg.innerText = `User Won ${userChoice} Beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compS++;
    paraComp.innerText = compS;
    console.log("Computer Win");
    msg.innerText = `Computer Won ${compChoice} Beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

let playGame = (userChoice) => {
  console.log("User Clicked = ", userChoice);
  let compChoice = compFunction();
  console.log("Computer = ", compChoice);

  if (userChoice === compChoice) {
    draw();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // paper scissor
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "scissor") {
      // rock paper
      userWin = compChoice === "paper" ? true : false;
    } else {
      // rock scissor
      userWin = compChoice === "scissor" ? true : false;
    }

    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((clk) => {
  clk.addEventListener("click", () => {
    let userChoice = clk.getAttribute("id");
    playGame(userChoice);
  });
});
