
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');
const rock_div = document.getElementById('PIEDRA');
const paper_div = document.getElementById('PAPEL');
const scissors_div = document.getElementById('TIJERA');


function getComputerChoice() {
  const choices = ['PIEDRA', 'PAPEL', 'TIJERA'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}


function convertCase(anythingIwant) {
  if (anythingIwant === 'PAPEL') return 'PAPEL';
  if (anythingIwant === 'TIJERA') return 'TIJERA';
  return 'PIEDRA';
}

function win(user, computer) {
  userScore++;
  
  userScore_span.innerHTML = userScore;
  const userName = ' (user)'.fontsize(3).sup();
  const compName = ' (comp)'.fontsize(3).sup();
  result_div.innerHTML = `<p>${convertCase(user)}${userName} DERROTA ${convertCase(computer)}${compName}. GANASTE!</p>`;
  const roundStatus = document.getElementById(user);
  roundStatus.classList.add('winningStyles');
  setTimeout(() => roundStatus.classList.remove('winningStyles'), 300);
}

function loses(user, computer) {
  computerScore++;
  
  computerScore_span.innerHTML = computerScore;
  const userName = ' (user)'.fontsize(3).sup();
  const compName = ' (comp)'.fontsize(3).sup();
  result_div.innerHTML = `<p>${convertCase(computer)}${compName} DERROTA ${convertCase(user)}${userName}. PERDISTE!</p>`;
  const roundStatus = document.getElementById(user);
  roundStatus.classList.add('losingStyles');
  setTimeout(() => roundStatus.classList.remove('losingStyles'), 300);
}


function draw(user, computer) {
	const userName = ' (user)'.fontsize(3).sup();
  const compName = ' (comp)'.fontsize(3).sup();
  result_div.innerHTML = `<p>FUE UN EMPATE! AMBOS SELECCIONARON ${convertCase(user)}</p>`;

  const roundStatus = document.getElementById(user);
  roundStatus.classList.add('drawStyles');
  setTimeout(() => roundStatus.classList.remove('drawStyles'), 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case 'PAPELPIEDRA':
    case 'PIEDRATIJERA':
    case 'TIJERAPAPEL':
      win(userChoice, computerChoice);
      // console.log("user wins");
      break;
    case 'PIEDRAPAPEL':
    case 'TIJERAPIEDRA':
    case 'PAPELTIJERA':
      loses(userChoice, computerChoice);
      // console.log("computer wins");
      break;
    case 'PIEDRAPIEDRA':
    case 'TIJERATIJERA':
    case 'PAPELPAPEL':
      draw(userChoice, computerChoice);
      // console.log("draw");
      break;
  }
}

function main() {
  rock_div.addEventListener('click', () => game('PIEDRA'));
  paper_div.addEventListener('click', () => game('PAPEL'));
  scissors_div.addEventListener('click', () => game('TIJERA'));
}

main();


