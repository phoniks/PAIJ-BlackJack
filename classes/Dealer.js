
const Deck = require( '../classes/Deck.js' )
const Hand = require('../classes/Hand.js')
const Player = require('../classes/Player')
const AIPlayer = require('../classes/AIPlayer')
const Human = require('../classes/Human')
const prompt = require('../classes/Prompt')



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
        console.log("Player who is splitting - " + player.name);
        let newHand1 = new Hand()
        newHand1.addCard(hand.cards[0])
        let newHand2 = new Hand()
        newHand2.addCard( hand.cards[ 1 ] )
        player.resetHand()
        console.log("----------" + player.hands)
        player.addHand( newHand1 )
        player.addHand( newHand2 )
        console.log(">>>>>>>>" + newHand1.showHand() )
        console.log(player.hands[0].showHand() )
        console.log(player.hands[1].showHand() )
        player.hands[0].beenSplit = true
        player.hands[1].beenSplit = true
      // }else{
      //   return console.log('Not possible')
      // }
    }

    playerTurn( players, deck ){
      let choices = ''
      for( let p in players ) {
        /* For loop to run to catch incase a player has multiple hands and
           performs the prompts for each hand. */
           const hands = players[p].hands
           const player = players[p]

        for ( let hand in hands ) {

          if ( player instanceof Human ) {

            while(!hands[hand].isBust && !hands[hand].stay){
              console.log( "Other players' hands: " )

    //TODO Needs to handle multiple hand displays.
              players.forEach( playerz => {
                console.log(playerz.name + ':   ' + playerz.hands[0].showHand() + " > " + playerz.hands[0].handValue() )
              })
                console.log("\n")

              console.log( "Dealer's hand: " + this.hands[0].showHand() )

              //console.log( "Your hand: \n")
              //player.hands.forEach( hand => { console.log(hand.showHand() ) } )
              console.log(hands[hand].showHand())
              if ( players[p].hands[1] ) {console.log(players[p].hands[1].showHand() ) }

              //console.log(player.hands[1].showHand())
              console.log( "Hand value: " + players[p].hands[0].handValue() )

              if ( players[p].hands[1] ) {console.log(players[p].hands[1].handValue() ) }

              choices = prompt.ask( 'What is your action?(hit, stay, split, ddown): ' )
              this.signalDealer(choices, hands[hand], deck, players[p])
            }

          }else{
              let elPlayer = players[p]
            do {
                choices = player.logicStream()
                this.signalDealer(choices, hands[hand], deck, player)
            }while( !hands[hand].isBust && !hands[hand].stay)
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
            // case 'split':
            // console.log("Hand to be split: " + hand.showHand())
            //   this.split( player, hand )
            //   break

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
