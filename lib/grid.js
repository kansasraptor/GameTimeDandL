function Grid(rowsize, columnsize) {
  this.rowsize = rowsize || 4;
  this.columnsize = columnsize || 4;
  this.cells = [];
}

Grid.prototype.buildCells = function() {
  var id = 0;
  for (var i = 0; i < this.rowsize; i++) {
    for (var j = 0; j < this.columnsize; j++) {
      this.cells.push({row: i, column: j, value: null, id: id});
      id++;
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
  }
  return this.findRandomNullCell();
};

Grid.prototype.findCellValue = function(column) {
  if (this.cells.column === column) {
    return this.cells;
  }
};
// this.cells.row === row &&
module.exports = Grid;
