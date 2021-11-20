let Enumerable = require('../enumerable');

Enumerable.fn.shuffle = function()
{
    let currentIndex = this.collection.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0)
    {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = this.collection[currentIndex];
      this.collection[currentIndex] = this.collection[randomIndex];
      this.collection[randomIndex] = temporaryValue;
    }

    return new Enumerable(this.collection);
};