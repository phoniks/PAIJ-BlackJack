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
    for ( let hand of this.hands ) {
      if( hand.handValue() < 17 ) {
        return true
      }else{
        return false
      }
    }
  }

  decideToSplit() {
    for ( let hand of this.hands ) {
      console.log(hand.cards);
      if ( hand.cards[0].rank === hand.cards[1].rank ) {
        if(hand.cards[0].value() === 10 ) {
          return true
        }
      } else {
        return false
      }
    }
  }


  /* AIplayer checks to see if his hand value is between 9 and 11 and decides
    whether or not to double down on that hand in question. */

  decideToDoubleDown(  ) {
    for ( let hand of this.hands ) {
      if ( hand.handValue() >= 9 && hand.handValue() <= 11 ) {
        if( this.bank > 50 && hand.currentBet < this.bank){
          return true
        }
      } else {
        return false
      }
  }
}
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
    console.log("-------------------> Logic Stream ");
    if(this.decideToSplit()) {
      console.log("AI is splitting.");
      return 'split'
    }else if(this.decideToDoubleDown()){
      console.log("AI is doubling down.");
      return 'ddown'
    }else if(this.decideToHit()){
      console.log("AI is taking a hit.");
      return  'hit'
    }else{
      console.log("AI is going to stay.")
      return 'stay'
    }
  }


}

module.exports = AIPlayer
