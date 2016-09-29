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
  this.settle()
}

createHands(players){
  players.forEach(player => {
    player.addHand(new Hand(player.name))
  })
}

  createHands(players){
    players.forEach(player => {
      player.addHand(new Hand(player.name))
    })
    this.dealer.addHand(new Hand('Dealer'))
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
    }
  }





  checkForTwentyOne() {
    if( this.dealer.hand === 21){
      return true
    }
  }

  winningHand() {
    for( handIndex = 0; handIndex > 17; handIndex++) {
      if ( players[handIndex] > dealers[handIndex]){
        console.log( "Player wins!" )
      } else if ( players[handIndex] > dealers[handIndex]){
      console.log ( "draw")
      }
    }
  }

dealerNatural(){
  this.players.filter(player => {
    if(player === this.dealer){
      if(player.hands[0].checkForNatural() == true){
        return true
      }
    }
  })
}

naturalPush(){
  if (this.dealerNatural() === true){
    this.players.forEach(player =>{
      if(player !== this.dealer){
        player.hands.forEach(hand => {
          if(hand.checkForNatural() === true){
            let playerIndex = this.players.indexOf(player)
            this.players.splice(playerIndex)
            console.log(player.name+'pushed.  No money won or lost.')
          } else {
            console.log(player.name+'loooooooooser!')
          }
        })
      }
    })
  }
}
  settle(){
    this.naturalPush()
    console.log('dealer has '+this.dealer.hands[0].showHand())
    this.players.forEach(player =>{
      player.hands.forEach(hand =>{
        if(hand.player !== "Dealer" && hand.handValue() <= 21 && hand.handValue() > this.dealer.hands[0].handValue()){
          player.bank += player.currentBet * 2
          console.log(player.name+' wins!!!')
        } else if (hand.player !== "Dealer" &&hand.handValue() === this.dealer.hands[0].handValue()){
          player.bank += player.currentBet
          console.log(player.name+' pushed with '+hand.showHand()+'. At least they didnt lose any money!')
        } else if(hand.player !== "Dealer"){
          console.log(player.name+' lost with'+hand.showHand())
        }
      })
    })
  }



}
module.exports = Round
