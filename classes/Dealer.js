const Deck = require( '../classes/Deck.js' )
const Hand = require('../classes/Hand.js')
const Player = require('../classes/Player')


// class Dealer {
//     constructor( name ){
//       this.name = name
//     }

    dealCard( deck, hand ) {
      hand.addCard( deck.cards[0] )
      deck.cards.shift()
    }
    playerTurn(players){
      for(let player of this.players){
        // this.player.hand
        // this.player.bank

        let choice = prompt('What would you like your bet to bet?: ')

        bet(choice) {
          for ( let hand of this.hands ) {
            hand.increaseBet( choice )
          }
          this.bank -= choice
        }

        let choices = prompt('What is your action?(hit, stay, split, ddown): ')

        switch((choices){
          case hit:
            this.player.hand.dealCard()
            break
          case stay:
            break
          case split:
            split(hand) {
            // if ( this.hand.cards[0].rank === this.hand.cards[1].rank ) {
            //
            // }
            let newHand1 = new Hand(this.name, hands.cards[0])
            let newHand2 = new Hand(this.name, 5)
            this.hands = []
            this.addHand(newHand1)
            this.addHand(newHand2)
            }
            break
          case ddown:
          doubleDown( handObj ) {
            let doubledBet = handObj.currentBet * 2
            this.bank -= doubledBet
            }
            break

        }
        return this.player
      }
    }

    //prompt(),


}

module.exports = Dealer
