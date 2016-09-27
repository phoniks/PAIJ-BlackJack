const Player = require('../classes/Player')
const Round = require('../classes/Round')
const Deck = require('../classes/Deck')
const Dealer = require('../classes/Dealer')

class Game {
    constructor(options) {
        this.playerName = options.name
        this.players = options.players         // Number of players          //Choose between 2 to 3 decks
        this.playerSeat = parseInt(options.seat) || 0
        this.playerIndex = [0,1,2,3].indexOf(this.playerSeat -1)
        console.log(this.playerIndex, this.playerSeat);
        this.remaining = [0,1,2,3].splice(this.playerIndex, 1)                   //Choice of seat
        this.noob = options.noob || false //New mode
        this.start(this.remaining);
    }

start(remaining){
  // console.log('remaining: ',remaining)
  const aiPlayers = []
  for(let i=0; i < (this.players); i++){
    let position = remaining[i]
    aiPlayers.push(new Player({bank: 250, seat: position}))
  }

  const humanPlayer = new Player( {name: this.playerName, bank: 250, seat: this.playerSeat})
  const decks = []
  decks.push(new Deck)
  // console.log(decks)

  const dealer = new Dealer({name: 'Dealer'})

  const options = {
    players: humanPlayer,
    decks: decks,
    dealer: dealer,
  }

  const round = new Round(options)
  // console.log(round)
}

}

module.exports = Game
