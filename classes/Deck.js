const Card = require('./Card')

class Deck{
  constructor(){
    this.cards = []
    this.numberOfDecks = 2
    this.generateCards(this.numberOfDecks)
  }
  generateCards(numberOfDecks){
    for (var i = numberOfDecks; i > 0; i--) {
      this.cards = this.cards.concat(Card.all())
    }
    this.numberOfCards = this.cards.length;
  }


}

module.exports = Deck
