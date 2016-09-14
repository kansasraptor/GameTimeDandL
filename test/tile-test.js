const assert = require('chai').assert;

const Tile = require('../lib/tile.js');

describe('Tile', function() {
  context('With default attributes', function() {
    it('Should assign default coordinates and value.', function() {
      var tile = new Tile(0, 0, 0)
      assert.equal(tile.x, 0);
      assert.equal(tile.y, 0);
      assert.equal(tile.tileValue, 2);

    });
  });
});
