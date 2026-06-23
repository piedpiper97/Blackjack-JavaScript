// 2 cards with their values and their sum
let one = 10;
let two = 11;
let sum = one + two;
let hasBlackJack = false
let isAlive = true

let message = ""

//black-jack logic
if (sum < 21) {
    message = "Do you want to draw a new card?"
} else if (sum === 21) {
    message = "Whohoo! You've got Blackjack!"
    hasBlackJack = true
} else {
    message = "You lose :("
    isAlive = false
}
console.log(message)