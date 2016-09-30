const chalk = require('chalk')
const colors = require('colors')
const cardColor = chalk.bgWhite.black
const valueColor = chalk.yellow

class Hand {
    constructor ( playerName ) {
    this.player = playerName
    this.cards = []
    this.currentBet = 0
    this.stay = false
    this.canDoubleDown = true
    this.doubledDown = false
    this.beenSplit = false
    this.isBust = false
    this.insurable = true
    this.surrendered = false
    this.insured = false
    this.canSurrender = true
    this.isBlackjack = false
  }

  // Adds a card object to the hand.
  addCard( card ) {
    console.log( cardColor( card.toString() + ' ' ) + "\n")
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

      if (total >21){
        this.isBust = true
      }
      return total
    } else {
    return total
    }
  }

  splittable(){
    if ( this.cards[0].rank === this.cards[1].rank ) {
      if(this.cards[0].value() === 10 ) {
        return true
      }
    } else {
      return false
    }
  }

  canDouble() {
    this.cards.length <= 2 && this.player.bank >= (this.bet *2)
  }


  checkForNatural(){
    if(this.cards.length === 2 && this.handValue() === 21){
      return true
    }
  }


}

module.exports = Hand
