class Game {
    constructor(options) {
        this.players = options.players         // Number of players
        this.decks= options.decks            //Choose between 2 to 3 decks
        this.playerSeat = options.seat || 0                   //Choice of seat
        this.noob = options.noob || false    //New mode
    }

}

module.exports = Game
