const AIPlayer = require('../classes/AIPlayer')
const Human = require('../classes/Human')
const prompt = require('../classes/Prompt')
const forBet = 'How much would you like to bet'
const Hand = require('../classes/Hand')
const Deck = require('../classes/Deck')

class Round {
    constructor(options){
    this.players = options.players
    this.decks = options.decks
    this.dealer = options.dealer
    this.start(this.players)
    }

start(players){
  this.decks[0].shuffleGame()
  this.createHands(players)
  this.takeBets(players)
  this.deal(players)
  this.dealer.playerTurn(players, this.decks[0])
}

createHands(players){
  players.forEach(player => {
    player.addHand(new Hand(player.name))
  })
}

takeBets(players){
  players.forEach(player => {
    if(player instanceof AIPlayer){
      player.bet(player.getBet())
    } else if(player instanceof Human){
      player.bet(prompt.askForNumber(forBet))
    }
  })
}

deckIntegrity(decks){

}

deal(players){
  for(let i=0; i<2; i++){
    players.forEach(player =>{
      let deck = this.decks[0]
      let hand = player.hands[0]
      this.dealer.dealCard(deck, hand)
    })
    //this.dealer.dealCard( this.decks[0], this.hands[0] )
  }
}


checkForNatural(){

}

winningHand(){

}

settle(){

 }
}

module.exports = Round
