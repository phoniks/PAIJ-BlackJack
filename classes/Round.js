const AIPlayer = require('../classes/AIPlayer')
const Human = require('../classes/Human')
const prompt = require('../classes/Prompt')

const Hand = require('../classes/Hand')
const Deck = require('../classes/Deck')
const Game = require('../classes/Game')
const chalk = require('chalk')

const cardColor = chalk.bgWhite.black
const forBet = 'How much would you like to bet'

class Round {

    constructor( game, options ){
      this.game = game
      this.players = options.players
      this.decks = options.decks
      this.dealer = options.dealer
      this.start(this.players)
    }

  start( players ) {
    if (!this.decks.shuffled){this.decks.shuffleGame()}
    else {this.decks.shuffleRound() }
    players.forEach( player => { console.log( player.name+ " BANK: " + player.bank ) })
    this.createHands(players)
    this.takeBets(players)
    this.deal(players)
    this.dealer.playerTurn(players, this.decks)
    this.settle()
    players.forEach( player => { console.log( "BANK: " + player.bank ) })
    //playAgain(this.decks)
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
        } else if ( player instanceof Human) {
          let playerBet = 0
           do {
            playerBet = prompt.askForNumber(forBet)
          } while ( playerBet > player.bank )



          // if ( player.bank <= playerBet ) { player.bet() }
          // else { playerBet = prompt.askForNumber( forBet ) }
          // TODO May need to check for zero funds and end game.
        }
      })
    }

    deal(players){
      for(let i=0; i<2; i++){
        players.forEach(player =>{
          let deck = this.decks
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

          if( hand.player !== 'Dealer' && hand.handValue() <= 21 && hand.handValue() > this.dealer.hands[0].handValue() && !this.dealer.hands[0].isBust ){
            player.bank += hand.currentBet * 2
          console.log(player.name+' wins!!!')

          } else if (hand.player !== 'Dealer' && hand.handValue() === this.dealer.hands[0].handValue()){
            player.bank += hand.currentBet
            console.log(player.name+' pushed with '+cardColor(hand.showHand())+'. At least they didnt lose any money!')

          } else if (hand.player !== 'Dealer' && hand.handValue() < this.dealer.hands[0].handValue() && this.dealer.isBust){
            console.log(player.name+' wins with '+cardColor(hand.showHand()))
          }else if (hand.player !== 'Dealer'){
            console.log(player.name+' lost with '+cardColor(hand.showHand()))
          }
        })
      })
      this.players.forEach( zplayer => { zplayer.resetHand() } )
    }

  playAgain(deck){
    let playAgain = prompt.ask('Would you like to play again?')
    if(playAgain == true || playAgain == 'y' || playAgain == 'yes'){

      console.log(deck);
      let options = {
        players: this.players,
        deck: deck,
        dealer: this.dealer,
      }
      const anotherOne = Game.newRound( options )
      console.log(anotherOne);
    }
  }

dealerBust(){
  if(this.dealer.isBust === true){
    return true
  }
}

  }
module.exports = Round

// this.players.forEach(player =>{
//   player.hands.forEach(hand=>{
//     hand.cards.forEach(card=> {
//       this.decks[0].cards.push(card)
//     })
//   })
// })
