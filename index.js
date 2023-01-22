const rock = document.getElementById("rock-btn")
const paper = document.getElementById("paper-btn")
const scissors = document.getElementById("scissors-btn")
const save = document.getElementById("save-btn")
const reset = document.getElementById("reset-btn")
const manual = document.getElementById("manual")
let output = document.getElementById("game-output")
let userScore = document.getElementById("user-score")
let aiScore = document.getElementById("ai-score")
const choices = ["rock", "paper", "scissors"]
//                  0       1          2
let userChoice
let aiChoice
const player = "USER Score: "
const ai = "BOT Score: "
let hands = document.getElementById("selected-hands")
let user = 0
let comp = 0
let scores = [user, comp]

// SAVES SCORES
save.addEventListener("click", function() {
    scores = [user, comp]
    localStorage.setItem('scores', JSON.stringify(scores))
})

// RESETS SCORES
reset.addEventListener("dblclick", function() {
    localStorage.clear()
    user = 0
    comp = 0
    userScore.textContent = player + user
    aiScore.textContent = ai + comp
})

rock.addEventListener("click", function(){
    userChoice = 0
    output.textContent = ""
    game()
})
paper.addEventListener("click", function(){
    userChoice = 1
    output.textContent = ""
    game()
})
scissors.addEventListener("click", function(){
    userChoice = 2
    output.textContent = ""
    game()
})
manual.addEventListener("click", function() {
    alert("First you click one of the 3 buttons listed below. Then yours and the ai's choice is displayed on screen and score is added to the winner. ROCK beats SCISSORS, PAPER beats ROCK, SCISSORS beats PAPER!")
})
userScore.innerText = player + user
aiScore.innerText = ai + comp
if (scores) {
    let storedScores = localStorage.getItem("scores")
    storedScores = JSON.parse(storedScores)
    userScore.textContent = player + storedScores[0]
    aiScore.textContent = ai + storedScores[1]
    user = storedScores[0]
    comp = storedScores[1]
}
function game() {
    aiChoice = Math.floor(Math.random() * 3)
    if (userChoice === aiChoice){
        hands.textContent = "Equal Choice"
        output.textContent = "You tied!"
    } else if (userChoice === 1 && aiChoice === 2) {
        hands.textContent = "PAPER vs SCISSORS"
        output.textContent = "You lose"
        comp += 1 
        aiScore.textContent = ai + comp
    } else if (userChoice === 2 && aiChoice === 0) {
        hands.textContent = "SCISSORS vs ROCK"
        output.textContent = "You lose"
        comp += 1
        aiScore.textContent = ai + comp
    } else if (userChoice === 0 && aiChoice === 1){
        hands.textContent = "ROCK vs PAPER"
        output.textContent = "You lose"
        comp += 1
        aiScore.textContent = ai + comp
    } else if (userChoice === 0 && aiChoice === 2){
        hands.textContent = "ROCK vs SCISSORS"
        output.textContent = "You WIN!"
        user += 1
        userScore.textContent = player + user
    } else if (userChoice === 1 && aiChoice === 0) {
        hands.textContent = "PAPER vs ROCK"
        output.textContent = "You WIN!"
        user += 1
        userScore.textContent = player + user
    } else if (userChoice === 2 && aiChoice === 1) {
        hands.textContent = "SCISSORS vs PAPER"
        output.textContent = "You WIN!"
        user += 1
        userScore.textContent = player + user
    }
}
