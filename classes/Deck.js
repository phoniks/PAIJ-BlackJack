const Card = require('./Card')

class Deck{
  constructor(){
    this.cards = []
    this.numberOfDecks = 2
    this.generateCards(this.numberOfDecks)
  }

  /*Receives the number of decks and generates a deck then
  concatenates the total numnber of decks together*/
  generateCards(numberOfDecks){
    for (var i = numberOfDecks; i > 0; i--) {
      this.cards = this.cards.concat(Card.all())
    }
    this.numberOfCards = this.cards.length;
  }

  /*Checks that the deck has the appropriate amount of cards to allow
  the game to star*/
  isComplete(){
   return this.numberOfCards === this.cards.length;
  }

  /*Takes what decks were generated and shuffles them to be dealt at
  the start of the game*/
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

  /*For when shuffling is chosen after a round*/
  shuffleRound() {
    var cardCount = this.cards.length

    for( let index = 0; index < cardCount; index++ ) {
      var randomIndex = Math.floor( Math.random() * cardCount )

      var temp = this.cards[ index ]
      this.cards[ index ] = this.cards[ randomIndex ]
      this.cards[ randomIndex ] = temp
    }
  }

  /*Puts the cards in an array as strings*/
  toString() {
      return this.cards.map( card => card.toString() ).concat()
    }

  /**/
  playCard() {
    return this.cards.pop()
  }


}

module.exports = Deck
