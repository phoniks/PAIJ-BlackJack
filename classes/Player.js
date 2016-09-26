class Player {
    constructor( options ) {
    this.hands =  [] // Instance of Hand classes stored in array
    this.bank = 100
    this.seat = options.seat
    }

    // Player decides to add a new card to their hand.
    const hit = () => {
      // invokes dealCard() on the dealer which invokes addCard() on the hand.
    }

    // Takes funds from player's bank and adds it the the Hand's bet variable.
    const bet = option => {
      for ( let hand in this.hands ) {
        hand.increaseBet( option )
      }
    }

    // Player passes on taking another card.
    const stay = () => {

    }

    // Takes the current bet from a Players Hand and doubles it.
    const doubleDown = () => {
      let doubledBet = this.hand.currentBet * 2
      this.bank -= doubledBet
    }

    // If player is dealt two of the same cards, splits hand into two hands.
    const split = () => {
      if ( this.hand.cards[0].rank === this.hand.cards[1].rank ) {

      }
    }

    // Process of buy 'insurance' incase dealer gets natural blackjack
    const buyInsurance = () => {

    }

    // If Player wishes to sit out a round.
    const surrender = () => {

    }

    // Calls the Card.value() function to total the value of Player's hand.
    const handValue = ( handObject ) => {
      let total = 0
      for ( let card in handObject ) {
        total += card.value()
      }
      return total
    }

    // Called at end of round to clear out players' hands
    const resetHand = () => {
      while( this.hands.length > 0 ){
          this.hands.pop()
      }
    }

}

module.exports = Player
