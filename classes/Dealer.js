
const Deck = require( '../classes/Deck.js' )
const Hand = require('../classes/Hand.js')
const Player = require('../classes/Player')
const Human = require('../classes/Human')
const prompt = require('../classes/Prompt')


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

        let newHand1 = new Hand( hand.cards[ 0 ] )
        let newHand2 = new Hand( hand.cards[ 1 ] )
        player.hands = []
        player.addHand( newHand1 )
        player.addHand( newHand2 )
      }else{
        return console.log('Not possible')
      }
    }

    playerTurn( players, deck ){
      let choices = ''
      for( let player of players ) {
        console.log(    'youve reached playerTurn'    );
        /* For loop to run to catch incase a player has multiple hands and
           performs the prompts for each hand. */
           const hands = player.hands
           console.log(player);
        for ( let hand of hands ) {
          console.log('You made it to the loop');
          if ( player instanceof Human ) {
            console.log('this is a human prompt');
            while(!hand.isBust() && hand.stay === false){
              choices = prompt.ask( 'What is your action?(hit, stay, split, ddown): ' )
              this.signalDealer(choices, hand, deck, player)
            }
          }else{
            while(!hand.isBust() && hand.stay === false){
              choices = player.logicStream()
              this.signalDealer(choices, hand, deck, player)
          }
        }
      }
    }
  }
    signalDealer(choices, hand, deck, player){
        console.log('signal',deck);
        switch( choices ) {

            // If option is hit, dealer deals a card to that player's hand.
            case 'hit':
                console.log('switch', deck);
              this.dealCard( deck, hand )
              hand.showHand
              break

            case 'stay':
              hand.stay = true
              break

            // The dealer splits the player's current hand.
            case 'split':
              this.split( player, hand )
              break

            // Calls the doubleDown function on the Player class.
            case 'ddown':
              player.doubleDown( hand )
              break
          }
        }

}

module.exports = Dealer
