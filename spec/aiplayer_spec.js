const Player = require('../classes/Player')
const AIPlayer = require('../classes/AIPlayer')
const Card = require('../classes/Card')
const Hand = require('../classes/Hand.js')
const SPADES = '♠️'
const CLUBS = '♣️'
const HEARTS = '♥️'
const DIAMONDS = '♦️'
const jimsHand = new Hand('jimbo')
const cards = [ new Card(HEARTS, 2),new Card(SPADES, 3),new Card(CLUBS, 6), new Card( DIAMONDS, 10)]
const createHand = (hand, cards) => {
  cards.forEach(card => {
    hand.addCard(card)
  })
}
const options = {
  name: 'jimbo',
  bank:  100,
  seat: 1
}
const jim = new AIPlayer(options)
console.log(jim);

createHand(jimsHand, cards)
console.log(jim);

describe("decideToBet", function() {
  it("should return 20", function() {
    expect(jim.decideToHit()).toBe(false);
  });
});
