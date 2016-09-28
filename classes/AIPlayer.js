const Player = require('../classes/Player')
const minimum = 5


class AIPlayer extends Player {
  constructor(options) {
    super(options);
  }


  getBet(){
    if(this.bank < minimum){
      console.log(`${this.name} is broke.  Go home ${this.name}`);
    } else {
      return Math.floor(Math.random() * (35 - minimum) + minimum)
    }
  }

  /* AIplayer looks at their hand to see if the cards are the same rank and
     to split their hand if the condition is true. */
  decideToHit() {
    if(handObj.handValue() < 9 && handObj.handValue() < 17 ) {
      return true
    }else{
      return false
    }
  }


  decideToSplit() {
    for ( let hand in this.hands ) {
      if ( hand[0].rank === hand[1] ) {
        return true
      } else {
        false
      }
    }
  }


  /* AIplayer checks to see if his hand value is between 9 and 11 and decides
    whether or not to double down on that hand in question. */

  decideToDoubleDown( handObj ) {
    if ( handObj.handValue() >= 9 && handObj.handValue() <= 11 ) {
      if( this.bank > 50 && currentBet < this.bank){
        return true
      }
    } else {
      return false
    }
  }

  /* AIplayer checks hand value to see if its under 17, if so, it returns true. If
    the hand's value is 17 or higher it returns false. */

  // decideToHit( handObj ) {
  //   if ( handObj.handValue() <= 17 ) {
  //     return fasle
  //   } else {
  //     return true
  //   }
  // }

  /* AIplayer looks at their bank and decides how much to bet, if player does not have
    enough money to bet, then returns an alert. */

  decideToBet() {
    if ( this.bank > 20 ) {
      return 20
    } else if ( this.bank < 10 ) {
      return "Player does not have enough money!"
    } else {
      return 10
    }
  }

  logicStream() {
    if(decideToSplit() === true) {
      return choices = 'split'
    }else if(decideToDoubleDown() === true){
      return choices = 'ddown'
    }else if(decideToHit() === true){
      return choices = 'hit'
    }else{
      return choices = 'stay'
    }
  }


}

module.exports = AIPlayer
