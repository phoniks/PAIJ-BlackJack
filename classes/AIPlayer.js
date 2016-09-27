class AI_Player extends Player {


  /* AIplayer looks at their hand to see if the cards are the same rank and
     to split their hand if the condition is true. */
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
      return true
    } else {
      return false
    }
  }

  /* AIplayer checks hand value to see if its under 17, if so, it returns true. If
    the hand's value is 17 or higher it returns false. */

  decideToHit( handObj ) {
    if ( handObj.handValue() <= 17 ) {
      return fasle
    } else {
      return true
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



}
