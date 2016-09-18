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
   assert.deepEqual(grid.cells[0], {row: 0, column: 0, value: null});
   assert.deepEqual(grid.cells[1], {row: 0, column: 1, value: null});
   assert.deepEqual(grid.cells[2], {row: 0, column: 2, value: null});
   assert.deepEqual(grid.cells[3], {row: 0, column: 3, value: null});
   assert.deepEqual(grid.cells[4], {row: 1, column: 0, value: null});
   assert.deepEqual(grid.cells[5], {row: 1, column: 1, value: null});
   assert.deepEqual(grid.cells[6], {row: 1, column: 2, value: null});
   assert.deepEqual(grid.cells[7], {row: 1, column: 3, value: null});
   assert.deepEqual(grid.cells[8], {row: 2, column: 0, value: null});
   assert.deepEqual(grid.cells[9], {row: 2, column: 1, value: null});
   assert.deepEqual(grid.cells[10], {row: 2, column: 2, value: null});
   assert.deepEqual(grid.cells[11], {row: 2, column: 3, value: null});
   assert.deepEqual(grid.cells[12], {row: 3, column: 0, value: null});
   assert.deepEqual(grid.cells[13], {row: 3, column: 1, value: null});
   assert.deepEqual(grid.cells[14], {row: 3, column: 2, value: null});
   assert.deepEqual(grid.cells[15], {row: 3, column: 3, value: null});
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
    grid.cells = [
      {row: 0, column: 0, value: 2},
      {row: 0, column: 0, value: 4},
      {row: 0, column: 0, value: null},
      {row: 0, column: 0, value: 8}
    ];
  });

  describe('Find cell', function() {

    var grid = new Grid();
    grid.cells = [
      {row: 0, column: 0, value: 2},
      {row: 0, column: 1, value: 4},
      {row: 0, column: 2, value: null},
      {row: 0, column: 3, value: 8}
    ];

    it('shoud be a function', function() {
      assert.isFunction(grid.findCell);
    });

    it('should find the value of one cell with "row 0" and "column 0" and return the value "2"', function() {
      var row = 0;
      var column = 0;
      var targetCell = grid.findCell(row, column);
      assert.equal(targetCell.length, 1);
      assert.equal(targetCell[0].value, 2);
    });

    it('should find the value of one cell with "row 0" and "column 1" and return the value "4"', function() {
      var row = 0;
      var column = 1;
      var targetCell = grid.findCell(row, column);
      assert.equal(targetCell.length, 1);
      assert.equal(targetCell[0].value, 4);
    });

    it('should find the value of one cell with "row 0" and "column 2" and return the value "null"', function() {
      var row = 0;
      var column = 2;
      var targetCell = grid.findCell(row, column);
      assert.equal(targetCell.length, 1);
      assert.equal(targetCell[0].value, null);
    });

    it('should find the value of one cell with "row 0" and "column 3" and return the value "8"', function() {
      var row = 0;
      var column = 3;
      var targetCell = grid.findCell(row, column);
      assert.equal(targetCell.length, 1);
      assert.equal(targetCell[0].value, 8);
    });
  });

  describe('Change cell values', function(){
    var grid = new Grid();
    grid.cells = [
      {row: 0, column: 0, value: 2},
      {row: 0, column: 1, value: 4},
      {row: 0, column: 2, value: null},
      {row: 0, column: 3, value: 8}
    ];
  });

  describe('Set rules for directions', function () {
    var grid = new Grid();

    it('should set the rules to moveDown', function (){
      var row = grid.rowsize;
      console.log(row);
      var column = grid.columnsize;
      console.log(column);
      var rules = grid.moveDown(row, column);
      assert.equal(rules[0].directionOne, -1);
      assert.equal(rules[0].directionTwo, -1);
    });

    it('should set the rules to moveUp', function() {
      var row = 0;
      var column = 0;
      var rules = grid.moveUp(row, column);
      assert.equal(rules[0].directionOne, 1);
      assert.equal(rules[0].directionTwo, 1);
    });
  });
});
