const Card = require('../classes/Card.js')

class Deck {
    constructor ( numberOfPlayers ) {
      this.cards = []
      this.numberOfDecks = numberOfPlayers
      this.generateCards()
  }

  generateCards() {
    for (var i = this.numberOfDecks; i > 0; i--) {
      this.cards = this.cards.concat(Card.all())
    }
    this.numberOfCards = this.cards.length;
  }


}

module.exports = Deck
