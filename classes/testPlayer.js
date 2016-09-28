/*
    File used to test constructors on Player and Hand classes as well
    as the relational functions between the two.
*/


const Card = require('../classes/Card.js')
const Deck = require( '../classes/Deck.js' )
const Player = require('../classes/Player.js')
const AIPlayer = require('../classes/AIPlayer.js')
const Dealer = require('../classes/Dealer.js')
const Round = require('../classes/Round.js')
const Game = require('../classes/Game.js')
const Prompt = require('../classes/Prompt.js')
const testPlayer = () => {

const dHand = new Hand( 'Steve' )
const Dood = new Player( 'Steve' )

const dealer = new Dealer( 'Cornelius' )



const elDeck = new Deck( 2 )
elDeck.shuffleRound()
for(i = 0; i < 6; i++){
  Dood.hit( dealer, elDeck, dHand )
}

// Dood.hit( dealer, elDeck, dHand )
//
// Dood.hit( dealer, elDeck, dHand )
//
// Dood.hit( dealer, elDeck, dHand )
//
console.log(dHand.cards[0].value())

askForNumber('choice') = prompt('What would you like your bet to bet?: ')


// console.log( "Player's hand: " + dHand.showHand() )

// console.log( "Player: " + Dood.name )
// console.log( "Player Bank: " + Dood.bank )

// Dood.addHand( dHand )
// console.log( "Number of hands player has: " + Dood.getNumberOfHands() )

// Dood.bet( 50 )
// console.log( "Player places bet: " + Dood.hands[0].currentBet )
// console.log( "Player's new bank: " + Dood.bank )

// Dood.split()
// console.log(Dood.hands[0].cards)
// console.log(Dood.hands[1].cards)
// console.log( "Player now has " + Dood.getNumberOfHands() + " hands.")

Dood.resetHand()
// console.log(Dood.hands)
}

testPlayer()
module.exports = testPlayer
