class Hand {
    constructor ( playerName ) {
    this.player = playerName
    this.cards = []
    this.currentBet = 0
    this.stay = false 
  }

  // Adds a card object to the hand.
  addCard( card ) {
    this.cards.push( card )
  }

  // Increase the bet attatched to hand by given amount.
  increaseBet( amount ) {
    this.currentBet += amount
  }

  showHand() {
    const disHand = []
    for ( let card of this.cards ) {
      disHand.push( '(' + `${card.rank}` + " of " + `${card.suit}` + ')' )
    }
    return disHand
  }

  // Invokes the value/rank of a card and adds to the total.
  handValue() {
    let total = 0
    for ( let card of this.cards ) {
      total += card.value()
    }
    return total
  }

  isBust(){
    return this.handValue() > 21
  }




}

module.exports = Hand
