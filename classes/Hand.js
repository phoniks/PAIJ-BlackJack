class Hand {
    constructor ( playerName, card ) {
    this.player = playerName
    this.cards = [card]
    this.currentBet = 0
  }

  // Adds a card object to the hand.
  addCard( card ) {
    this.cards.push( card )
  }

  // Increase the bet attatched to hand by given amount.
  increaseBet( amount ) {
    this.currentBet += amount
  }

  // Invokes the value/rank of a card and adds to the total.
  handValue() {
    let total = 0
    for ( let card in this.cards ) {
      total += card.value()
    }
    return total
  }



}

module.exports = Hand
