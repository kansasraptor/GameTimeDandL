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
   assert.deepEqual(grid.cells[0], {row: 0, column: 0, value: null, key: 0});
   assert.deepEqual(grid.cells[1], {row: 0, column: 1, value: null, key: 1});
   assert.deepEqual(grid.cells[2], {row: 0, column: 2, value: null, key: 2});
   assert.deepEqual(grid.cells[3], {row: 0, column: 3, value: null, key: 3});
   assert.deepEqual(grid.cells[4], {row: 1, column: 0, value: null, key: 4});
   assert.deepEqual(grid.cells[5], {row: 1, column: 1, value: null, key: 5});
   assert.deepEqual(grid.cells[6], {row: 1, column: 2, value: null, key: 6});
   assert.deepEqual(grid.cells[7], {row: 1, column: 3, value: null, key: 7});
   assert.deepEqual(grid.cells[8], {row: 2, column: 0, value: null, key: 8});
   assert.deepEqual(grid.cells[9], {row: 2, column: 1, value: null, key: 9});
   assert.deepEqual(grid.cells[10], {row: 2, column: 2, value: null, key: 10});
   assert.deepEqual(grid.cells[11], {row: 2, column: 3, value: null, key: 11});
   assert.deepEqual(grid.cells[12], {row: 3, column: 0, value: null, key: 12});
   assert.deepEqual(grid.cells[13], {row: 3, column: 1, value: null, key: 13});
   assert.deepEqual(grid.cells[14], {row: 3, column: 2, value: null, key: 14});
   assert.deepEqual(grid.cells[15], {row: 3, column: 3, value: null, key: 15});
 });

  describe('should have functionality to find "null" value cells and randomly assign a value of "2" to one of them', function () {

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
        {row: 0, column: 0, value: null, idCorrect: true},
        {row: 0, column: 0, value: 8}];
      var targetCell = grid.findRandomNullCell();
      assert.equal(targetCell.idCorrect, true);
    });
  });

  it('should have a function that finds a column based on a column number', function () {
    var grid = new Grid();
    grid.cells = grid.buildCells();
    columnNumber = 0;
    column = grid.findByColumn(columnNumber);
    assert.equal(column[2].row, 2);
  });

  it('should have a function that finds a row based on a row number', function () {
    var grid = new Grid();
    grid.cells = []
    grid.buildCells(); // create new grid
    rowNumber = 0; // we are at row 0
    var row = grid.findByRow(rowNumber)
    assert.equal(row[2].column, 2);
  });

  describe('should have functionality to find cells by "row" and/or "column" postion or by "key" value', function () {
    it('should find a cell by the cells "key" property value', function (){
      var grid = new Grid();
      grid.cells = [
        {row: 0, column: 0, value: 2, key: 0},
        {row: 0, column: 0, value: 4, key: 1},
        {row: 0, column: 0, value: null, key: 2},
        {row: 0, column: 0, value: 8, key: 3}];
      var targetCell = grid.findCellbyKey(0);
      assert.equal(targetCell[0].value, 2);
    });



    it('should have a function that finds a cell based on the row and column values', function() {
      var grid = new Grid();
      grid.cells = [
        {row: 0, column: 0, value: 2},
        {row: 0, column: 1, value: 4},
        {row: 0, column: 2, value: null},
        {row: 0, column: 3, value: 8}];
      var rowNumber = 0;
      var columnNumber = 0;
      var targetCell = grid.findCellByRowColumn(row, column);
      assert.equal(targetCell[0].value, 2);
    });

    it('should have a function that finds a cell based on the row and column values', function() {
      var grid = new Grid();
      grid.cells = [
        {row: 0, column: 0, value: 2},
        {row: 0, column: 1, value: 4},
        {row: 0, column: 2, value: null},
        {row: 0, column: 3, value: 8}];
      var rowNumber = 0;
      var columnNumber = 3;
      var targetCell = grid.findCellByRowColumn(row, column);
      assert.equal(targetCell[0].value, 8);
    });
  });

  describe('Set rules for directions', function () {
    var grid = new Grid();

    it('should set the rules to moveDown', function (){
      var rowNumber = grid.rowsize;
      var columnNumber = grid.columnsize;
      var rules = grid.moveDown(row, column);
      assert.equal(rules[0].directionOne, -1);
      assert.equal(rules[0].directionTwo, -1);
    });

    it('should set the rules to moveLeft', function (){
      var rowNumber = grid.rowsize;
      var columnNumber = grid.columnsize;
      var rules = grid.moveLeft(row, column);
      assert.equal(rules[0].directionOne, -1);
      assert.equal(rules[0].directionTwo, 1);
    });

    it('should set the rules to moveRight', function (){
      var rowNumber = grid.rowsize;
      var columnNumber = grid.columnsize;
      var rules = grid.moveRight(row, column);
      assert.equal(rules[0].directionOne, 1);
      assert.equal(rules[0].directionTwo, -1);
    });

    it('should set the rules to moveUp', function (){
      var rowNumber = grid.rowsize;
      var columnNumber = grid.columnsize;
      var rules = grid.moveUp(row, column);
      assert.equal(rules[0].directionOne, 1);
      assert.equal(rules[0].directionTwo, 1);
    });
  });

  // describe('Update cell values', function(){
  //     var grid = new Grid();
  //     grid.cells = [
  //     {row: 0, column: 0, value: 2, key: 0},
  //     {row: 0, column: 1, value: 2, key: 1},
  //     {row: 0, column: 2, value: 2, key: 2},
  //     {row: 0, column: 3, value: 2, key: 3},
  //     {row: 1, column: 0, value: 2, key: 4},
  //     {row: 1, column: 1, value: 2, key: 5},
  //     {row: 1, column: 2, value: 2, key: 6},
  //     {row: 1, column: 3, value: null, key: 7},
  //     {row: 2, column: 0, value: 2, key: 8},
  //     {row: 2, column: 1, value: 2, key: 9},
  //     {row: 2, column: 2, value: null, key: 10},
  //     {row: 2, column: 3, value: null, key: 11},
  //     {row: 3, column: 0, value: 2, key: 12},
  //     {row: 3, column: 1, value: null, key: 13},
  //     {row: 3, column: 2, value: null, key: 14},
  //     {row: 3, column: 3, value: null, key: 15}
  //   ];
  //
  //   it('should be a function', function(){
  //     assert.isFunction(grid.updateCellValues);
  //   });
  //
  //   it('should return a proper values when moveUp function is called', function () {
  //     var row = 0;
  //     var column = 0;
  //     var rules = grid.moveUp(row, column);
  //     grid.updateCellValues(rules);
  //     assert.equal(grid.cells[0].value, 4);
  //     assert.equal(grid.cells[1].value, 4);
  //     assert.equal(grid.cells[2].value, 4);
  //     assert.equal(grid.cells[3].value, 2);
  //     assert.equal(grid.cells[4].value, null);
  //     assert.equal(grid.cells[5].value, null);
  //     assert.equal(grid.cells[6].value, null);
  //     assert.equal(grid.cells[7].value, null);
  //     assert.equal(grid.cells[8].value, 4);
  //     assert.equal(grid.cells[9].value, 2);
  //     assert.equal(grid.cells[10].value, null);
  //     assert.equal(grid.cells[11].value, null);
  //     assert.equal(grid.cells[12].value, null);
  //     assert.equal(grid.cells[13].value, null);
  //     assert.equal(grid.cells[14].value, null);
  //     assert.equal(grid.cells[15].value, null);
  //   });
  // });

  describe('Update cell values', function(){
      var grid = new Grid();
      grid.cells = [
      {row: 0, column: 0, value: 2, key: 0},
      {row: 0, column: 1, value: 2, key: 1},
      {row: 0, column: 2, value: null, key: 2},
      {row: 0, column: 3, value: null, key: 3},
      {row: 1, column: 0, value: null, key: 4},
      {row: 1, column: 1, value: null, key: 5},
      {row: 1, column: 2, value: 2, key: 6},
      {row: 1, column: 3, value: null, key: 7},
      {row: 2, column: 0, value: 2, key: 8},
      {row: 2, column: 1, value: null, key: 9},
      {row: 2, column: 2, value: 2, key: 10},
      {row: 2, column: 3, value: null, key: 11},
      {row: 3, column: 0, value: null, key: 12},
      {row: 3, column: 1, value: 2, key: 13},
      {row: 3, column: 2, value: null, key: 14},
      {row: 3, column: 3, value: 2, key: 15}
    ];

    it('should be a function', function(){
      assert.isFunction(grid.updateCellValues);
    });

    it('should return a proper values when moveUp function is called', function () {
      var rowNumber = 0;
      var columnNumber = 0;
      var rules = grid.moveUp(row, column);
      grid.updateCellValues(rules);
      assert.equal(grid.cells[0].value, 4);
      assert.equal(grid.cells[1].value, 4);
      assert.equal(grid.cells[2].value, null);
      assert.equal(grid.cells[3].value, null);
      assert.equal(grid.cells[4].value, null);
      assert.equal(grid.cells[5].value, null);
      assert.equal(grid.cells[6].value, 4);
      assert.equal(grid.cells[7].value, null);
      assert.equal(grid.cells[8].value, null);
      assert.equal(grid.cells[9].value, null);
      assert.equal(grid.cells[10].value, 4);
      assert.equal(grid.cells[11].value, null);
      assert.equal(grid.cells[12].value, null);
      assert.equal(grid.cells[13].value, null);
      assert.equal(grid.cells[14].value, null);
      assert.equal(grid.cells[15].value, null);
    });
  });
});
