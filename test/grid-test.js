const assert = require('chai').assert;

const Grid = require('../lib/grid.js');

describe('Grid', function () {

it('shoud be a function', function() {
  assert.isFunction(Grid);
});

 it('should return an array', function() {
   var grid = new Grid()
   assert.isArray(Grid(4,4));
 })

});
