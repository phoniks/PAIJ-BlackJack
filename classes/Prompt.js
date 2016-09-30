

const AIPlayer = require( '../classes/AIPlayer' )
//const dealer = require( '../classes/Dealer' )

const rl = require('readline-sync')
const chalk = require('chalk')
const colors = require('colors')

const promptColor = chalk.red
const cardColor = chalk.bgWhite.black
const valueColor = chalk.yellow
const turnColor = chalk.magenta
const bankColor = chalk.cyan

module.exports = {
  ask: (question) =>{
    return rl.question(chalk.underline.bgBlue('>>' + question) + '')
  },

  askForNumber: function(question){
    return parseInt(this.ask(question), 10)
  },

  playerPrompt: ( player ) => {
    console.log( promptColor( "___________________________") )
    console.log( "Your Hand: " + cardColor( player.hands[0].showHand() ) )
    console.log( "Hand Value: " + valueColor( player.hands[0].handValue() ) )
    console.log( "Bank: " + bankColor( player.bank ) )
    console.log( promptColor( "---------------------------") )
  },

  otherHands: ( players ) => {
    console.log( promptColor(" +-----------------------------------------+ ") + " \n")
    for ( let player of players ) {
      if ( player.name !== 'Dealer' && player instanceof AIPlayer ) {
        console.log( "   " + player.name + " : " + cardColor( player.hands[0].showHand() ) + "\n" )
        }
      }
    console.log( promptColor( " +-----------------------------------------+ " ) )

  },

  dealerCard: dealer => {
    console.log( "Dealer's card: " + cardColor(dealer.hands[0].showDealerCard()) )
  },

  aiTurn: player => {
    console.log("------------------->  ")
  }

}
