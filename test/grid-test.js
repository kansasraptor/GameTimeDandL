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
});
