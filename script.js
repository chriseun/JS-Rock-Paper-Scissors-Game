const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
  userChoice = e.target.id
  userChoiceDisplay.innerText = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice(){
  const randomNumber = Math.floor(Math.random() * possibleChoices.length)
  if (randomNumber == 0){
    computerChoice = 'rock'
  }
  else if (randomNumber == 1){
        computerChoice = 'scissors'
  }
  else {
        computerChoice = 'paper'
  }

  computerChoiceDisplay.innerHTML = computerChoice

}

function getResult(){
  if (computerChoice == userChoice){
    result = `it\'s a draw!`
  }
  if (computerChoice === 'rock' && userChoice === 'paper'){
    result = 'you win!'
  }
    if (computerChoice === 'rock' && userChoice === 'scissors'){
    result = 'you lost!'
  }
    if (computerChoice === 'paper' && userChoice === 'scissors'){
    result = 'you win!'
  }
    if (computerChoice === 'paper' && userChoice === 'rock'){
    result = 'you lost!'
  }
      if (computerChoice === 'scissors' && userChoice === 'rock'){
    result = 'you win!'
  }
        if (computerChoice === 'scissors' && userChoice === 'paper'){
    result = 'you lost!'
  }
  resultDisplay.innerHTML = result
}
