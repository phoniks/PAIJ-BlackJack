const Hand = require( '../classes/Hand.js' )

class Player {
    constructor( options ) {
    this.name = options.name
    this.hands =  options.hand || [] // Instance of Hand classes stored in array
    this.bank = options.bank || 100
    this.seat = options.seat
    this.surrendered = false

    }

    // Player decides to add a new card to their hand.
    hit( dealer, deck, hand ) {
      dealer.dealCard( deck, hand )
    }

    // Takes funds from player's bank and adds it the the Hand's bet variable.
    bet( option ) {
      for ( let hand of this.hands ) {
        hand.increaseBet( option )
      }
      this.bank -= option
    }

    // Player passes on taking another card.
    stay() {
      return false
    }

    // Takes the current bet from a Players Hand and doubles it.
    doubleDown( handObj ) {
      let doubledBet = handObj.currentBet * 2
      this.bank -= doubledBet
    }

    addHand( handObj ) {
      this.hands.push( handObj )
    }

    // If player is dealt two of the same cards, splits hand into two hands.
    split() {
      // if ( this.hand.cards[0].rank === this.hand.cards[1].rank ) {
      //
      // }
      let newHand1 = new Hand(this.name, this.hands[0].cards[0])
      let newHand2 = new Hand(this.name, 5)
      this.hands = []
      this.addHand(newHand1)
      this.addHand(newHand2)

    }

    // Process of buy 'insurance' incase dealer gets natural blackjack
    buyInsurance() {

    }

    // If Player wishes to sit out a round.
    surrender( handObj ) {
      let returnBet = handObj.currentBet / 2
      this.bank += returnBet
      this.surrendered = true
    }

    // Calls the Card.value() function to total the value of Player's hand.
    handValue( handObject ) {
      let total = 0
      for ( let card in handObject ) {
        total += card.value()
      }
      return total
    }

    // Called at end of round to clear out players' hands
    resetHand() {
      while( this.hands.length > 0 ){
          this.hands.pop()
      }
    }

    getNumberOfHands() {
      let total = 0
      for ( let hand in this.hands ) {
        total++
      }
      return total
    }

}

module.exports = Player
