
const Deck = require( '../classes/Deck.js' )
const Hand = require('../classes/Hand.js')
const Player = require('../classes/Player')
const Human = require('../classes/Human')
const prompt = require('../classes/Prompt')
const AIPlayer = require( '../classes/AIPlayer' )


class Dealer extends AIPlayer{
    constructor( options ){
      super(options)
    }

    dealCard( deck, handObj ) {
      const cards = deck.cards
      handObj.addCard( cards[0] )
      deck.cards.shift()
    }

    split( player, hand ) {
        //if (hand.cards[0].rank === hand.cards[1].rank ) {

        let newHand1 = new Hand()
        newHand1.addCard(hand.cards[0])
        let newHand2 = new Hand()
        newHand2.addCard( hand.cards[ 1 ] )
        player.hands = []
        console.log("----------" + player.hands)
        player.addHand( newHand1 )
        player.addHand( newHand2 )
        console.log(">>>>>>>>" + newHand1.showHand() )
      // }else{
      //   return console.log('Not possible')
      // }
    }

    playerTurn( players, deck ){
      let choices = ''
      for( let player of players ) {
        /* For loop to run to catch incase a player has multiple hands and
           performs the prompts for each hand. */
           const hands = player.hands

        for ( let hand of hands ) {

          if ( player instanceof Human ) {

            while(!hand.isBust() && hand.stay === false){
              console.log( "Other players' hands: " )

              players.forEach( player => {

              console.log(player.hands[0].showHand() + "\n" ) })
              console.log( "Dealer's hand: " + this.hands[0].showHand() )

              //console.log( "Your hand: \n")
              //player.hands.forEach( hand => { console.log(hand.showHand() ) } )
              console.log(hand.showHand())
              console.log( "Hand value: " + hand.handValue() )

              choices = prompt.ask( 'What is your action?(hit, stay, split, ddown): ' )
              this.signalDealer(choices, hand, deck, player)
            }

          }else{

            while( !hand.isBust() && hand.stay === false ){
              choices = player.logicStream()
              this.signalDealer(choices, hand, deck, player)
          }
        }
      }
    }
  }
    signalDealer( choices, hand, deck, player ){
        switch( choices ) {

            // If option is hit, dealer deals a card to that player's hand.
            case 'hit':
              this.dealCard( deck, hand )
              //hand.showHand()
              break

            case 'stay':
              hand.stay = true
              break

            // The dealer splits the player's current hand.
            case 'split':
            console.log("Hand to be split: " + hand.showHand())
              this.split( player, hand )
              break

            // Calls the doubleDown function on the Player class.
            case 'ddown':

              if ( hand.doubledDown ) {
                console.log("Can only double down once.")

              } else {

              player.doubleDown( hand )
              this.dealCard( deck, hand )
              hand.stay = true
            }
              break
          }
        }

}

module.exports = Dealer
