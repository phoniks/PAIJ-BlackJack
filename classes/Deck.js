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
  isComplete(){
   return this.numberOfCards === this.cards.length;
  }
  shuffleGame() {
    var cardCount = this.cards.length

    if (cardCount !== this.numberOfCards){
      throw new Error('refusing to shuffle partial deck');
    }

    for( let index = 0; index < cardCount; index++ ) {
      var randomIndex = Math.floor( Math.random() * cardCount )

      var temp = this.cards[ index ]
      this.cards[ index ] = this.cards[ randomIndex ]
      this.cards[ randomIndex ] = temp
    }
  }
  shuffleRound() {
    var cardCount = this.cards.length

    for( let index = 0; index < cardCount; index++ ) {
      var randomIndex = Math.floor( Math.random() * cardCount )

      var temp = this.cards[ index ]
      this.cards[ index ] = this.cards[ randomIndex ]
      this.cards[ randomIndex ] = temp
    }
  }
  toString() {
      return this.cards.map( card => card.toString() ).concat()
    }
  playCard() {
    return this.cards.pop()
  }



}
const deckShit = new Deck(2)
deckShit.shuffleGame()
console.log(deckShit.cards)
