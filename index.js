// 2 cards with their values and their sum
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false

let message = ""

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");


function startGame(){
    isAlive = true
    //generate initial cards
    let one = randomize();
    let two = randomize();
    cards = [one, two]
    sum = one + two
    renderGame()
}

function renderGame(){
    //initial state
    cardsEl.textContent = "Cards: "
    //get sum of current cards
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    //calculate sum
    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Whohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You lose :("
        isAlive = false
    }
    messageEl.textContent = message;
    
}

//user draws new card
function newCard(){
    let card = randomize();
    sum += card;
    cards.push(card)
    renderGame();
}

//random number generator between 0 & 11
function randomize(){
    let num = Math.floor(Math.random() * 13) + 1
    if (num > 10){
        return 10
    } else if (num === 1) {
        return 11
    } return num
}