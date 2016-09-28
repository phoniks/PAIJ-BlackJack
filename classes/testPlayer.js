/*
    File used to test constructors on Player and Hand classes as well
    as the relational functions between the two.
*/


const Player = require('../classes/Player.js')
const Hand = require( '../classes/Hand.js' )
const Card = require( '../classes/Card.js' )
const Deck = require( '../classes/Deck.js' )
const Dealer = require( '../classes/Dealer.js' )

const testPlayer = () => {

  const dHand = new Hand( 'Steve' )
  const Dood = new Player( 'Steve' )
  const Dood1 = new Player( 'rudy' )
  const Dood2 = new Player( 'bob' )

  const peeps = [Dood, Dood1, Dood2]


  const dealer = new Dealer( 'Cornelius' )

  const elDeck = new Deck( 2 )


  peeps[0].addHand(dHand[0])

  console.log(peeps[0])


  elDeck.shuffleRound()
  let i = 0
  while(i < 5){
    dealer.dealCard(elDeck, peeps[0])
    i++
  }


  // dealer.dealCard(elDeck, Dood.hands[0])
  // //
  // // Dood.hit( dealer, elDeck, dHand )
  // //
  // // Dood.hit( dealer, elDeck, dHand )
  // //
  // // Dood.hit( dealer, elDeck, dHand )
  //
  // console.log(dHand.cards[0].value());
  //
  //
  //
  // console.log( "Player's hand: " + dHand.showHand() )
  //
  // // console.log( "Player: " + Dood.name )
  // // console.log( "Player Bank: " + Dood.bank )
  //
  // // Dood.addHand( dHand )
  // // console.log( "Number of hands player has: " + Dood.getNumberOfHands() )
  //
  // // Dood.bet( 50 )
  // // console.log( "Player places bet: " + Dood.hands[0].currentBet )
  // // console.log( "Player's new bank: " + Dood.bank )
  //
  // // Dood.split()
  // // console.log(Dood.hands[0].cards)
  // // console.log(Dood.hands[1].cards)
  // // console.log( "Player now has " + Dood.getNumberOfHands() + " hands.")
  //
  // Dood.resetHand()
  // // console.log(Dood.hands)
}

testPlayer()
module.exports = testPlayer
