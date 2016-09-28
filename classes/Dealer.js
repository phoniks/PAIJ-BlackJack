const Card = require('../classes/Card.js')
const Deck = require( '../classes/Deck.js' )
const Player = require('../classes/Player.js')
const AIPlayer = require('../classes/AIPlayer.js')
const Hand = require('../classes/Hand.js')
const Round = require('../classes/Round.js')
const Game = require('../classes/Game.js')
const Prompt = require('../classes/Prompt.js')

class Dealer {
    constructor( name ){
      this.name = name
      this.hand = []
      this.seat = 4
    }

    dealCard( deck, handObj ) {
      player.hands.addCard( deck.cards[0] )
      deck.cards.shift()
    }
    split( player ) {
      // if ( this.hand.cards[0].rank === this.hand.cards[1].rank ) {
      // }
      let newHand1 = new Hand( player.hands[ 0 ].cards[ 0 ] )
      let newHand2 = new Hand( player.hands[ 0 ].cards[ 1 ] )
      player.hands = []
      player.addHand( newHand1 )
      player.addHand( newHand2 )
    }

    playerTurn( players ){
      for( let player of this.players ) {


    /* TODO May need to add a check if the current player is Human or AI. */
        //  if ( player.constructor != AIPlayer ) )

        askForNumber('choice') = prompt('What would you like your bet to bet?: ')

        /* Calls the bet function on the player class to allow easy altering of player's bank. */
        player.bet( choice )

        ask('choices') = prompt( 'What is your action?(hit, stay, split, ddown): ' )

        /* For loop to run to catch incase a player has multiple hands and
           performs the prompts for each hand. */
        for ( let hand in player.hands ) {
          switch( choices ) {

            // If option is hit, dealer deals a card to that player's hand.
            case 'hit':
              this.player.hands.hit( dealer, deck, hand )
              break

            case 'stay':
              break

            // The dealer splits the player's current hand.
            case 'split':
              this.player.hands.split( player )
              break

            // Calls the doubleDown function on the Player class.
            case 'ddown':
              this.player.hands.doubleDown( handObj )
              break
          }
        }
      }
    }

    //prompt(),
}

module.exports = Dealer
