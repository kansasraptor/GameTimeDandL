function Grid(rowsize, columnsize) {
  this.rowsize = rowsize || 4;
  this.columnsize = columnsize || 4;
  this.cells = [];
};

Grid.prototype = {
  buildCells: function() {
  var id = 0
  for (var i = 0; i < this.rowsize; i++) {
    for (var j = 0; j < this.columnsize; j++) {
        this.cells.push({row: i, column: j, value: null, id: id});
        id++;
      };
    };
  },

  findCellById: function(id) {
    var cell = this.cells.filter(function(item, index, array){
      return cell = item.id === id;
    });
  },

  findCellByRowColumn: function(row, column) {
    var rowNumber = this.cells.filter(function(item, index, array){
      return rowFound = item.row === row;
    });
    var cell = rowNumber.filter(function(item, index, array){
      return columnFound = item.column === column;
    });
    return cell;
  },

  getRandomNumber: function() {
    randomNumber = Math.floor(Math.random() * this.cells.length);
    return randomNumber;
  },

  findRandomNullCell: function() {
    var index = this.getRandomNumber();
    var cellCandidate = this.cells[index];
    if (cellCandidate.value === null) {
      cellCandidate.value = 2;
      return cellCandidate;
    };
    return this.findRandomNullCell();
  },

  moveDown: function(row, column) {
    rules = [];
    rules.push({originOne: column,originTwo: row, directionOne: -1, directionTwo: -1});
    return rules;
  },

  moveLeft: function(row, column) {
    rules = [];
    rules.push({originOne: row, originTwo: column, directionOne: -1, directionTwo: 1});
    return rules;
  },

  moveRight: function(row, column) {
    rules = [];
    rules.push({originOne: row, originTwo: column, directionOne: 1, directionTwo: -1});
    return rules;
  },

  moveUp: function(row, column) {
    rules = [];
    rules.push({originOne: column, originTwo: row, endOne: this.columnsize, endTwo: this.rowsize, directionOne: 1, directionTwo: 1});
    return rules;
  },

  updateCellValues: function(rules) {
    originOne = rules[0].originOne;
    originTwo = rules[0].originTwo;
    endOne = rules[0].endOne;
    endTwo = rules[0].endTwo;
    directionOne = rules[0].directionOne;
    directionTwo = rules[0].directionTwo;

    for (var i = originOne; i < endOne; i = i + directionOne) {
      for (var j = originTwo; j < endTwo; j = j + directionTwo) {
        if (isColumn(directionOne,directionTwo)) {
          indexValue = this.cells.findIndex(this.findCellById());
          console.log(indexValue);
          cell = this.findCellByRowColumn(j, i);
          compareCell = this.findCellByRowColumn(j, i + 1);
          if (cellIsNull(cell)) {
            continue
          };
          if (cellValuesAreEqual(cell, compareCell)) {
            cell[0].value = setCellValueNew(cell);
            compareCell[0].value = setCellValueNull(compareCell);
            j = j + directionTwo;
          };
        } else {
          cell = this.findCellByRowColumn(i,j);
          compareCell = this.findCellByRowColumn(i, j + 1,);
          if (cellIsNull(cell)) {
            continue
          };
          if (cellValuesAreEqual(cell, compareCell)) {
            cell[0].value = setCellValueNew(cell);
            compareCell[0].value = setCellValueNull(compareCell);
            j = j + directionTwo;
          };
        };
        this.cells[0].value = cell[0].value;
        this.cells[1].value = compareCell[0].value;
      };
    };
  }
};

function cellIsNull(cell) {
  if (cell[0].value === null) {
    return true;
  };
};

function cellValuesAreEqual(cell, compareCell) {
  if (cell[0].value === compareCell[0].value) {
    return true;
  };
};

function isColumn(directionOne,directionTwo) {
  if (directionOne === directionTwo) {
    return true;
  };
};

function setCellValueNew(cell) {
  return cell[0].value * 2;
};

function setCellValueNull(cell) {
  return cell[0].value = null;
};

module.exports = Grid;
