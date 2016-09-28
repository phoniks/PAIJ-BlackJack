const AIPlayer = require('../classes/AIPlayer')

class Round {
    constructor(options){
    this.players = options.players
    this.decks = options.decks
    this.dealer = options.dealer
    this.start(this.players)
    }

start(players){
  this.takeBets(players)
}

takeBets(players){
  players.forEach(player => {
    if(player instanceof AIPlayer){
      console.log('true');
    }
  })
}

deckIntegrity(decks){

}

deal(players){

}

checkForNatural(){

}

winningHand(){

}

settle(){

 }
}

module.exports = Round
