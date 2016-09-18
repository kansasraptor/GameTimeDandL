const assert = require('chai').assert;
const Grid = require('../lib/grid.js');

describe('Grid', function () {

  it('shoud be a function', function() {
    assert.isFunction(Grid);
  });

  it('should return an object', function() {
    var grid = new Grid();
    assert.isObject(grid);
  });

  it('should have a "cells" property, which is an array', function() {
    var grid = new Grid();
    assert.isArray(grid.cells);
    assert.deepEqual(grid.cells, []);
  });

 it('should assign a value of "null" to each cell', function (){
   var grid = new Grid();
   var cells = grid.buildCells();
   assert.deepEqual(grid.cells[0], {row: 0, column: 0, value: null, id: 0});
   assert.deepEqual(grid.cells[1], {row: 0, column: 1, value: null, id: 1});
   assert.deepEqual(grid.cells[2], {row: 0, column: 2, value: null, id: 2});
   assert.deepEqual(grid.cells[3], {row: 0, column: 3, value: null, id: 3});
   assert.deepEqual(grid.cells[4], {row: 1, column: 0, value: null, id: 4});
   assert.deepEqual(grid.cells[5], {row: 1, column: 1, value: null, id: 5});
   assert.deepEqual(grid.cells[6], {row: 1, column: 2, value: null, id: 6});
   assert.deepEqual(grid.cells[7], {row: 1, column: 3, value: null, id: 7});
   assert.deepEqual(grid.cells[8], {row: 2, column: 0, value: null, id: 8});
   assert.deepEqual(grid.cells[9], {row: 2, column: 1, value: null, id: 9});
   assert.deepEqual(grid.cells[10], {row: 2, column: 2, value: null, id: 10});
   assert.deepEqual(grid.cells[11], {row: 2, column: 3, value: null, id: 11});
   assert.deepEqual(grid.cells[12], {row: 3, column: 0, value: null, id: 12});
   assert.deepEqual(grid.cells[13], {row: 3, column: 1, value: null, id: 13});
   assert.deepEqual(grid.cells[14], {row: 3, column: 2, value: null, id: 14});
   assert.deepEqual(grid.cells[15], {row: 3, column: 3, value: null, id: 15});
 });

 it('should have a function that finds one random number from 0 to 15', function () {
  var grid = new Grid();
  var num = grid.getRandomNumber();
  assert.isFunction(grid.getRandomNumber);
  assert.isNumber(num);
  assert.isAtLeast(num, 0);
  assert.isAtMost(num, 15);
 });

  it('should find a cell with a null value and assign it a value of 2', function () {
    var grid = new Grid();
    grid.cells = [{row: 0, column: 0, value: 2}, {row: 0, column: 0, value: 4}, {row: 0, column: 0, value: null, idCorrect: true}, {row: 0, column: 0, value: 8}];
    var targetCell = grid.findRandomNullCell();
    assert.equal(targetCell.idCorrect, true);
  });

  it('should find a cell by the cells "key" property value', function (){
    var grid = new Grid();
      grid.cells = [{row: 0, column: 0, value: 2, key: 0}, {row: 0, column: 0, value: 4, key: 1}, {row: 0, column: 0, value: null, key: 2}, {row: 0, column: 0, value: 8, key: 3}];
      var targetCell = grid.findCellbyKey(0);
      assert.equal(targetCell[0].value, 2);
  });

  it('should have a function that finds a cell based on the row and column values', function() {
    var grid = new Grid();
    grid.cells = [{row: 0, column: 0, value: 2}, {row: 0, column: 1, value: 4}, {row: 0, column: 2, value: null}, {row: 0, column: 3, value: 8}];
    var row = 0;
    var column = 0;
    var targetCell = grid.findCellByRowColumn(row, column);
    assert.equal(targetCell[0].value, 2);
  });

  it('should have a function that finds a cell based on the row and column values', function() {
    var grid = new Grid();
    grid.cells = [{row: 0, column: 0, value: 2}, {row: 0, column: 1, value: 4}, {row: 0, column: 2, value: null}, {row: 0, column: 3, value: 8}];
    var row = 0;
    var column = 3;
    var targetCell = grid.findCellByRowColumn(row, column);
    assert.equal(targetCell[0].value, 8);
  });

  describe('Set rules for directions', function () {
    var grid = new Grid();

    it('should set the rules to moveDown', function (){
      var row = grid.rowsize;
      var column = grid.columnsize;
      var rules = grid.moveDown(row, column);
      assert.equal(rules[0].directionOne, -1);
      assert.equal(rules[0].directionTwo, -1);
    });

    it('should set the rules to moveLeft', function (){
      var row = grid.rowsize;
      var column = grid.columnsize;
      var rules = grid.moveLeft(row, column);
      assert.equal(rules[0].directionOne, -1);
      assert.equal(rules[0].directionTwo, 1);
    });

    it('should set the rules to moveRight', function (){
      var row = grid.rowsize;
      var column = grid.columnsize;
      var rules = grid.moveRight(row, column);
      assert.equal(rules[0].directionOne, 1);
      assert.equal(rules[0].directionTwo, -1);
    });

    it('should set the rules to moveUp', function (){
      var row = grid.rowsize;
      var column = grid.columnsize;
      var rules = grid.moveUp(row, column);
      assert.equal(rules[0].directionOne, 1);
      assert.equal(rules[0].directionTwo, 1);
    });
  });

  describe('Update cell values', function(){
      var grid = new Grid();
      grid.cells = [
      {row: 0, column: 0, value: 2, key: 0},
      {row: 0, column: 1, value: 2, key: 1},
      {row: 0, column: 2, value: null, key: 2},
      {row: 0, column: 3, value: null, key: 3},
      {row: 1, column: 0, value: 2, key: 4},
      {row: 1, column: 1, value: 2, key: 5},
      {row: 1, column: 2, value: null, key: 6},
      {row: 1, column: 3, value: null, key: 7},
      {row: 2, column: 0, value: 2, key: 8},
      {row: 2, column: 1, value: 2, key: 9},
      {row: 2, column: 2, value: null, key: 10},
      {row: 2, column: 3, value: 4, key: 11},
      {row: 3, column: 0, value: 2, key: 12},
      {row: 3, column: 1, value: 2, key: 13},
      {row: 3, column: 2, value: null, key: 14},
      {row: 3, column: 3, value: 4, key: 15}
    ];

    it('should be a function', function(){
      assert.isFunction(grid.updateCellValues);
    });

    it('should return a "value" of 4 for "row" 0, "column" 0', function () {
      var row = 0;
      var column = 0;
      var rules = grid.moveUp(row, column);
      grid.updateCellValues(rules);
      assert.equal(grid.cells[0].value, 4);
      assert.equal(grid.cells[4].value, null);
    });

    it('should return a "value" of 8 for "row" 3, "column" 3', function () {
      var row = 3;
      var column = 3;
      var rules = grid.moveDown(row, column);
      grid.updateCellValues(rules);
      assert.equal(grid.cells[15].value, 8);
    });
  });

});
