const Deck = require( '../classes/Deck.js' )


class Dealer {
    constructor( name ){
      this.name = name
    }

    dealCard( deck, hand ) {
      hand.addCard( deck.cards[0] )
      deck.cards.shift()
    }

    //prompt(),


}

module.exports = Dealer
