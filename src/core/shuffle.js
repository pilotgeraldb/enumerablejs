var Enumerable = require('../enumerable');

Enumerable.fn.shuffle = function()
{
    var currentIndex = this.collection.length;
    var temporaryValue;
    var randomIndex;

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