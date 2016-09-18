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
  var cell = rowNumber.filter(function(item, index, array){
    return columnFound = item.column === column;
  });
  return cell;
};

Grid.prototype.moveDown = function(row, column) {
  rules = [];
  rules.push({originOne: column,originTwo: row, directionOne: -1, directionTwo: -1});
  return rules;
};

Grid.prototype.moveLeft = function(row, column) {
  rules = [];
  rules.push({originOne: row, originTwo: column, directionOne: -1, directionTwo: 1});
  return rules;
};

Grid.prototype.moveRight = function(row, column) {
  rules = [];
  rules.push({originOne: row, originTwo: column, directionOne: 1, directionTwo: -1});
  return rules;
};

Grid.prototype.moveUp = function(row, column) {
  rules = [];
  rules.push({originOne: column, originTwo: row, endOne: this.columnsize, endTwo: this.rowsize, directionOne: 1, directionTwo: 1});
  return rules;
};

Grid.prototype.updateCellValues = function(rules) {

  originOne = rules[0].originOne;
  originTwo = rules[0].originTwo;
  endOne = rules[0].endOne;
  endTwo = rules[0].endTwo;
  directionOne = rules[0].directionOne;
  directionTwo = rules[0].directionTwo;

  for (var i = originOne; i < endOne; i = i + directionOne) {
    for (var j = originTwo; j < endTwo; j = j + directionTwo) {
      if (directionOne === directionTwo) {
        cell = this.findCell(j, i);
          if (cell[0].value === null) {
            console.log(cell,'I am null');
            continue};
        compareCell = this.findCell(j, i + 1);
      } else {
        cell = this.findCell(i,j);
        compareCell = this.findCell(i, j + 1,);
      };
    };
  };

};

module.exports = Grid;
