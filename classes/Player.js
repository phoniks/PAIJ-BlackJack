class Player {
    constructor(options) {
    this.hand = // Instance of Hand class
    this.bank = 100
    this.seat = options.seat
    }

    // Player decides to add a new card to their hand.
    const hit = () => {
      // invokes dealCard() on the dealer which invokes addCard() on the hand.
    },

    // Takes funds from player's bank and adds it the the Hand's bet variable.
    const bet = ( option ) => {
      if ( option = 'all-in' ) {
        // Add this.bank to Hand's bet.
      } else {
        this.currentBet = option
        this.bank -= option
      }
    }

    // If player wishes to sit out a round.
    const stay = () => {

    }

    // Doubles the player's current bet
    const doubleDown = () => {
      let doubledBet = this.currentBet * 2
      this.bank -= doubledBet
    },

    // If player is deal two of the same cards, splits hand into two hands.
    const split = () => {
      if ( this.hand[0].rank === this.hand[1].rank ) {
        let hand1 = [this.hand[0]]
        let hand2 = [this.hand[1]]
        this.hand = [hand1, hand2]
      } else {
        return "Can only split when deal two of the same cards."
      }
    }

    // Process of buy 'insurance' incase dealer gets natural blackjack
    const buyInsurance = () => {

    }

    //
    const surrender = () => {

    }

    // Calls the Card.value() function to total the value of Player's hand.
    const handValue = (this.hand) => {
      let total = 0
      for ( let card in hand ) {
        total += card.value()
      }
      return total
    }

    // Called at end of round to clear out players' hands
    const resetHand = () => {
      this.hand = []
    }

}
