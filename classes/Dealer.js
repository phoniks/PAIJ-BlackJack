
const Deck = require( '../classes/Deck.js' )
const Hand = require('../classes/Hand.js')
const Player = require('../classes/Player')




class Dealer extends Player{
    constructor( options ){
      super(options)
    }

    dealCard( deck, handObj ) {
      const cards = deck.cards
      handObj.addCard( cards[0] )
      deck.cards.shift()
    }
    split( player, hand ) {
        if (hand.cards[0].rank === hand.cards[1].rank ) {

        let newHand1 = new Hand( player.hands[ 0 ].cards[ 0 ] )
        let newHand2 = new Hand( player.hands[ 0 ].cards[ 1 ] )
        player.hands = []
        player.addHand( newHand1 )
        player.addHand( newHand2 )
      }else{
        return console.log('Not possible')
      }
    }

    playerTurn( players ){
      for( let player of this.players ) {


    /* TODO May need to add a check if the current player is Human or AI. */


        /* For loop to run to catch incase a player has multiple hands and
           performs the prompts for each hand. */
        for ( let hand in player.hands ) {
          if ( player instanceof = Human ) ){
            let choices = prompt.ask( 'What is your action?(hit, stay, split, ddown): ' )
          }else{
            let choices = player.logicStream()
          }

          switch( choices ) {

            // If option is hit, dealer deals a card to that player's hand.
            case 'hit':
              this.dealCard( deck, hand )
              break

            case 'stay':
              break

            // The dealer splits the player's current hand.
            case 'split':
              this.split( player, this )
              break

            // Calls the doubleDown function on the Player class.
            case 'ddown':
              player.doubleDown( hand )
              break
          }
        }
      }
    }


}

module.exports = Dealer
