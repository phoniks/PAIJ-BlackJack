const Player = require('../classes/Player')
//const prompt = require( '../classes/Prompt' )

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
    for ( let hand in this.hands ) {
      return hand.splittable()
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
    console.log("------------------->  " + this.name )
        // if(this.decideToSplit()) {
        //   console.log("AI is splitting.");
        //   return 'split'
    if(this.decideToDoubleDown()){
      console.log( this.name + " is doubling down.")
      return 'ddown'
    }else if(this.decideToHit()){
      console.log( this.name + " is taking a hit.")
      return  'hit'
    }else{
      console.log( this.name + " is going to stay.")
      return 'stay'
    }
  }


}

module.exports = AIPlayer
