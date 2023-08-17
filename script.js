
let totalScores = { computerScore: 0, playerScore: 0 }

function getComputerChoice() {
    const rps = ['Rock', 'Paper', 'Scissors']
    let randomRps = Math.floor(Math.random() * rps.length)
    return rps[randomRps]
  
  }
  
  
  function getResult(playerChoice, computerChoice) {
    
    let score
  
  
    
    if (playerChoice == computerChoice) {
      score = 0
    }
  
    
    else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
      score = 1
    } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
      score = 1
    } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
      score = 1
    }
  
  
  
    else {
      score = -1
    }
  
    return score
  
  }
  
  
  
  function showResult(score, playerChoice, computerChoice) {
  
    let result = document.getElementById('result')
    let scoreDiv = document.getElementById('player-score')
    let hands = document.getElementById('hands')
    let computerScoreDiv = document.getElementById('computer-score')
  
    if (score == -1) {
      result.innerText = 'You Lose !'
    } else if (score == 0) {
      result.innerText = 'Its a Draw!'
    } else {
      result.innerText = 'You WIN!'
    }
    scoreDiv.innerText = `Your Score : ${totalScores['playerScore']}`
    computerScoreDiv.innerText = `Computer's Score : ${totalScores['computerScore']}`
    hands.innerText = `👨${playerChoice} Vs 🤖${computerChoice}`
  }
  
  
  function onClickRPS(playerChoice) {
    let computerChoice = getComputerChoice()
    const score = getResult(playerChoice.value, computerChoice)
  
    totalScores['playerScore'] += score
    totalScores['computerScore'] -= score
  
    showResult(score, playerChoice.value, computerChoice)
  }
  
  
  
  function playGame() {
   
  
    const RPS = document.querySelectorAll('.rpsButton')
   
    RPS.forEach(rps => {
      rps.onclick = () => onClickRPS(rps)
    })
  
  
  
    let endGamebtn = document.getElementById('endGameButton')
    endGamebtn.onclick = () => endGame()
  
  }
  
 
  function endGame() {
    totalScores['computerScore'] = 0
    totalScores['playerScore'] = 0
  
    let playerscore = document.getElementById('player-score')
    let hands = document.getElementById('hands')
    let result = document.getElementById('result')
    let computerScore = document.getElementById('computer-score')
    playerscore.innerText = ''
    hands.innerText = ''
    result.innerText = ''
    computerScore.innerText = ''
  }
  
  playGame()