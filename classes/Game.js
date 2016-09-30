const AIPlayer = require('../classes/AIPlayer')
const Human = require('../classes/Human')
const Round = require('../classes/Round')
const Deck = require('../classes/Deck')
const Dealer = require('../classes/Dealer')
const prompt = require('../classes/Prompt')

let gameOptions = {}

class Game {
    constructor(options) {
        this.playerName = options.name
        this.players = options.players         // Number of players          //Choose between 2 to 3 decks
        this.playerSeat = options.seat      //Choice of seat
        this.noob = options.noob || false //New mode
        this.names = options.names
        this.keepPlaying = true
        this.start()
        this.doRound( gameOptions )
    }

start(){
  const remaining = [0,1,2,3]
  const index = remaining.indexOf(parseInt(this.playerSeat))
  remaining.splice(index , 1)
  const players = []
  for(let i= 0; i < this.players -1 ; i++){
    let position = remaining[0]
    const specs = {
      name: this.names[i],
      seat: position
    }
    players.push(new AIPlayer( specs ))
    remaining.shift()
  }

  const playerSeat = this.playerSeat

  const humanPlayer = new Human( {name: this.playerName, seat: parseInt(this.playerSeat)})
  const decks = new Deck
  players.push(humanPlayer)

  // console.log(decks)

  const dealer = new Dealer( {name:'Dealer', bank: 1000, seat: 4})
  players.push(dealer)
    gameOptions = {
      players: players,
      decks: decks,
      dealer: dealer,
    }

  //const round = new Round( gameOptions )

}

doRound() {
  do {
    const round = new Round( this, gameOptions )
    let decision = prompt.ask("Care to play again?")
      switch (decision){

      case 'y' || 'yes':
        this.doRound()
        break

      case 'n' || 'no':
        console.log("GAME OVER")
        this.keepPlaying = false
        break
      }
  } while (this.keepPlaying === true && this.players.forEach(player => player.bank > 10) )
}



}


module.exports = Game
