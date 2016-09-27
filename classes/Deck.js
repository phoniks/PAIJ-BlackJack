const Card = require('./Card')

class Deck{
  constructor(numberOfPlayers){
    this.cards = []
    this.numberOfDecks = 2
    this.generateCards()
  }
  generateCards(){
    for (var i = this.numberOfDecks; i > 0; i--) {
      this.cards = this.cards.concat(Card.all())
    }
    this.numberOfCards = this.cards.length;
  }


}
const deckShit = new Deck(2)
console.log(deckShit.cards)
