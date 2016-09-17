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
    grid.cells = [{row: 0, column: 0, value: 2}, {row: 0, column: 0, value: 4}, {row: 0, column: 0, value: null, idCorrect: true}, {row: 0, column: 0, value: 8}];
    var targetCell = grid.findRandomNullCell();
    console.log(grid.cells);
    assert.equal(targetCell.idCorrect, true);
    // assert.equal(targetCell, grid.cells[2]);
  });

  it('should have a function that finds the value of cell based on the row and column values', function() {
    var grid = new Grid();
    grid.cells = [{row: 0, column: 0, value: 2}, {row: 0, column: 1, value: 4}, {row: 0, column: 2, value: null}, {row: 0, column: 3, value: 8}];
    debugger
    // var row = 0;
    var column = 0;
    var targetCell = grid.findCellValue(column);
    assert.equal(targetCell.value, 2);
    // var row = 0;
    // var column = 1;
    // var targetCell = grid.findCellValue(row, column);
    // assert.equal(targetCell.value, 4);
    // // var row = 0;
    // var column = 2;
    // var targetCell = grid.findCellValue(row, column);
    // assert.equal(targetCell.value, null);
    // // var row = 0;
    // var column = 3;
    // var targetCell = grid.findCellValue(row, column);
    // assert.equal(targetCell.value, 8);




  });
});
