const assert = require('chai').assert;

const Tile = require('../lib/tile.js');

describe('Tile', function() {
  context('With default attributes', function() {

    var tile = new Tile(0, 0, 0)

    it('Should assign default coordinates and value.', function() {
      assert.equal(tile.x, 0);
      assert.equal(tile.y, 0);
      assert.equal(tile.tileValue, 2);
    });

    it('Should have a method called "moveRight()"', function() {
      assert.isFunction(tile.moveRight);
    });

    it('"moveRight()" should increase the "x" property by 1', function() {
      tile.moveRight();
      assert.equal(tile.x, 1);
    });

    it('Should have a method called "moveLeft()"', function() {
      assert.isFunction(tile.moveLeft);
    });

    it('"moveLeft()" should decrease the "x" property by 1', function() {
      tile.moveLeft();
      assert.equal(tile.x, 0);
    });

    it('Should have a method called "moveUp()"', function() {
      assert.isFunction(tile.moveUp);
    });

    it('"moveUp()" should increase the "y" property by 1', function() {
      tile.moveUp();
      assert.equal(tile.y, 1);
    });

    it('Should have a method called "moveDown()"', function() {
      assert.isFunction(tile.moveDown);
    });

    it('"moveDown()" should decrease the "y" property by 1', function() {
      tile.moveDown();
      assert.equal(tile.y, 0);
    });

    it('should have a method called "checkAdjacent()"', function() {
      assert.isFunction(tile.checkAdjacent);
    });

    it('should check to see if there is an adjacent block', function() {

    });
  });
});

//things the grid is calling on each tile 
