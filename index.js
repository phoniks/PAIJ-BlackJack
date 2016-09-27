const prompt = require('readline-sync')
const colors = require('colors')
const Game = require('./classes/Game')


const mode = prompt.question('Welcome to PAIJ Blackjack! We\'re happy you decided to join us! \nIs this your first time playing our blackjack game? (y/n)')

const noob = ['false']
if(mode === 'y'){
  console.log('For New Players we have a New Player Mode which will give you advice on how to play Blackjack.')
  const noobMode = prompt.question('Would you like to activate this mode now? \n (Type \'y\' to activate noob mode, or \'n\' to leave it deactivated)' )
  noob[0] = 'true'
} else if (mode === 'n'){
  const noobMode = prompt.question('Turn on New Player Mode?')
  noob[0] = 'false'
}

console.log('noobMode', noob)

if(noob[0] === true){
  console.log('expansive help')
} else {
  console.log("minimal help")
}
const players = []
players.pop
while (players < 1 || players > 4){
  ai = prompt.question('How many AI players would you like? (1-4)')
  players.push(ai)
  }
console.log(players)

const seat = prompt.question('What position would you like to sit in? (1-4)')

const options = {
  players: parseInt(players),
  decks: Math.round(players.length/2),
  seat: seat,
  noob: noob,
}

const startGame = (options) => new Game


console.log(options)
const start = prompt.question('Ready to begin?')
if(start === 'y' || start === 'yes'){
  const game = new Game(options)
  console.log(game)
} else {
  prompt.question('Would you like to review the help?')
}
