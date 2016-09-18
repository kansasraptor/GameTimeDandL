function Grid(rowsize, columnsize) {
  this.rowsize = rowsize || 4;
  this.columnsize = columnsize || 4;
  this.cells = [];
};

Grid.prototype.buildCells = function() {
  for (var i = 0; i < this.rowsize; i++) {
    for (var j = 0; j < this.columnsize; j++) {
      this.cells.push({row: i, column: j, value: null});
    };
  };
};

Grid.prototype.getRandomNumber = function() {
  randomNumber = Math.floor(Math.random() * this.cells.length);
  return randomNumber;
};

Grid.prototype.findRandomNullCell = function() {
  var index = this.getRandomNumber();
  var cellCandidate = this.cells[index];
  if (cellCandidate.value === null) {
    cellCandidate.value = 2;
    return cellCandidate;
  };
  return this.findRandomNullCell();
};

Grid.prototype.findCell = function(row, column) {
  var rowNumber = this.cells.filter(function(item, index, array){
    return rowFound = item.row === row;
  });
  var columnNumber = rowNumber.filter(function(item, index, array){
    return columnFound = item.column === column;
  });
  return columnNumber
};

Grid.prototype.moveDown = function(row, column) {
  rules = [];
  rules.push({originOne: column, originTwo: row, directionOne: -1, directionTwo: -1});
  return rules;
};

Grid.prototype.moveUp = function(row, column) {
  rules = [];
  rules.push({originOne: column, originTwo: row, directionOne: 1, directionTwo: 1});
  return rules;
};


module.exports = Grid;
