const Player = require('../classes/Player')
const Round = require('../classes/Round')
const Deck = require('../classes/Deck')
const Dealer = require('../classes/Dealer')

class Game {
    constructor(options) {
        this.playerName = options.name
        this.players = options.players         // Number of players          //Choose between 2 to 3 decks
        this.playerSeat = options.seat      //Choice of seat
        this.noob = options.noob || false //New mode
        this.names = options.names
        this.start()
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
    players.push(new Player(specs ))
    remaining.shift()
  }

  const playerSeat = this.playerSeat

  const humanPlayer = new Player( {name: this.playerName, seat: parseInt(this.playerSeat)})
  const decks = []
  decks.push(new Deck)
  players.push(humanPlayer)

  // console.log(decks)

  const dealer = new Dealer({name: 'Dealer'})

  const options = {
    players: players,
    decks: decks,
    dealer: dealer,
  }
  
  const round = new Round(options)
}

}

module.exports = Game
