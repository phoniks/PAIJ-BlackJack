const chalk = require('chalk')
const colors = require('colors')

class Hand {
    constructor ( playerName ) {
    this.player = playerName
    this.cards = []
    this.currentBet = 0
    this.stay = false
    this.doubledDown = false
    this.beenSplit = false
    this.isBust = false
  }

  // Adds a card object to the hand.
  addCard( card ) {
    console.log(card.toString())
    this.cards.push( card )
    this.handValue()
  }

  // Increase the bet attatched to hand by given amount.
  increaseBet( amount ) {
    this.currentBet += amount
  }

  checkForAce() {
    let aceInHand = false
    for ( let card of this.cards ){
      if ( card.isAce() ) {
        aceInHand = true
      }
    }
    return aceInHand
  }

  showHand() {
    const disHand = []
    for ( let card of this.cards ) {
      disHand.push( `${card.rank}` + `${card.suit}` + ' ')
    }
    let handTotal = this.handValue()
    disHand.push( handTotal  )
    return disHand
  }

  showDealerCard() {
    let dealerCard = this.showHand()
    dealerCard.shift()
    return dealerCard
  }

  // Invokes the value/rank of a card and adds to the total.
  handValue() {
    let total = 0
    for ( let card of this.cards ) {
      total += card.value()
    }
    if ( total > 21 ) {
      if (this.checkForAce()){
        total -= 10
      }else{
        this.isBust = true
      }
      return total
    } else {
    return total
    }
  }


  checkForNatural(){
    if(this.cards.length === 2 && this.handValue() === 21){
      return true
    }
  }


}

module.exports = Hand
