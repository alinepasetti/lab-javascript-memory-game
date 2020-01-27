class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // cards = [];
    // for (let i = 0; i < array.length; i++) {
    //   let randomNumber = Math.floor(Math.random() * array.length);
    //   cards.push(array[randomNumber]);
    // }
    // console.log(cards);
    function shuffle(cards) {
      if (cards.length) {
        var currentIndex = cards.length;
      }
      let temporaryValue;
      let randomIndex;
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = temporaryValue;
      }
    }

    shuffle(this.cards);
  }

  checkIfPair(card1, card2) {
    this.pickedCards.push('1');
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }

  isFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}
