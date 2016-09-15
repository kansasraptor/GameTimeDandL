const assert = require('chai').assert;

const Grid = require('../lib/grid.js');

// var grid = new Grid();

describe('Grid', function() {
  // context('With default properties', function() {

    it('Should be a function', function() {
      assert.isFunction(Grid);
  });
    it('Should instantiate an object', function() {
      var grid = new Grid();
      assert.isObject(grid);
    });

    it('Should take the first arguement and set it as the rows property of the instantiated object', function() {
      var grid = new Grid(4);
      assert.equal(grid.row, 4);
    });

    it('should take the second arguement and set it as the columns propert of the instantiated object', function() {
      var grid = new Grid(4, 4);
      assert.equal(grid.column, 4);
    });

    it ('should have a "tiles" property, which starts out as an empty array', function() {
      var grid = new Grid(4, 4);
      assert.isArray(grid.tiles);
      assert.deepEqual(grid.tiles, []);
    });

    it.skip('should determine the key value to determine move direction');

    it.skip('should determine the starting position and direction of move from key value');

    it.skip('should have a function that compares the "tileValue" properties of two tiles');

    it.skip('should have a function that removes to tiles with the same "tileValue" property');

    it.skip('should have a function that appends a new tile with the combined "tileValue" property of the removed tiles to the cell in the direction of the keypress key value');

    it.skip('should have a function that slides tiles to chosen direction');

    it.skip('should ')

    it.skip('should create an array of all cells with null values');

    it.skip('should have a function that selects a random cell from the array of null values');

    it.skip('should create a new tile that accepts the position of the random null cell');



});
