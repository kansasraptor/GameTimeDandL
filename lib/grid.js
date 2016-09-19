function Grid(rowsize, columnsize) {
  this.rowsize = rowsize || 4;
  this.columnsize = columnsize || 4;
  this.cells = [];
};

Grid.prototype = {

  buildCells: function() {
    key = 0
    var id = 0;
    for (var i = 0; i < this.rowsize; i++) {
      for (var j = 0; j < this.columnsize; j++) {
        this.cells.push({row: i, column: j, value: null, key: key});
        key++;
      };
    };
  },

  findCellbyKey: function(key) {
    var cell = this.cells.filter(function(cell, index, array){
      return cell.key === key;
    });
    return cell;
  },

  findCellByRowColumn: function(row, column) {
    var rowNumber = this.cells.filter(function(cell, index, array){
      return cell.row === row;
    });
    var cell = rowNumber.filter(function(cell, index, array){
      return cell.column === column;
    });
    return cell;
  },

  findRandomNullCell: function() {
    var index = this.getRandomNumber();
    var cellCandidate = this.cells[index];
    if (cellCandidate.value === null) {
      cellCandidate.value = 2;
      return cellCandidate;
    }
    return this.findRandomNullCell();
  },

  getRandomNumber: function() {
    randomNumber = Math.floor(Math.random() * this.cells.length);
    return randomNumber;
  },

  moveDown: function(row, column) {
    var rules = [];
    // rules.push({originOne: column, originTwo: row, endOne: this.columnsize, endTwo: this.rowsize, directionOne: -1, directionTwo: -1});
    rules.push({originOne: 3, originTwo: 3, endOne: 0, endTwo: 0, directionOne: -1, directionTwo: -1});
    return rules;
  },

  moveLeft: function(row, column) {
    var rules = [];
    // rules.push({originOne: row, origineTwo: column, endOne: this.rowsize, endTwo: this.columnsize, directionOne: -1, directionTwo: 1});
        rules.push({originOne: 3, originTwo: 0, endOne: 0, endTwo: 3, directionOne: -1, directionTwo: 1});
    return rules;
  },

  moveRight: function(row, column) {
    var rules = [];
    // rules.push({originOne: row, origineTwo: column, endOne: this.rowsize, endTwo: this.columnsize, directionOne: 1, directionTwo: -1});
    rules.push({originOne: 0, originTwo: 3, endOne: 3, endTwo: 0, directionOne: 1, directionTwo: -1});
    return rules;
  },

  moveUp: function(row, column) {
    var rules = [];
    rules.push({originOne: 0, originTwo: 0, endOne: 3, endTwo: 3, directionOne: 1, directionTwo: 1});
    return rules;
  },

  updateCellValues: function(rules) {

    var originOne = rules[0].originOne;
    var originTwo = rules[0].originTwo;
    var endOne = rules[0].endOne;
    var endTwo = rules[0].endTwo;
    var directionOne = rules[0].directionOne;
    var directionTwo = rules[0].directionTwo;
    var baseCell = [{empty: true}];

    debugger;

    for (var i = originOne; i < endOne; i = i + directionOne) {
      for (var j = originTwo; j < endTwo; j = j + directionTwo) {

        if (isColumn(directionOne, directionTwo)) {

          if (baseCell[0].empty !== true) {
            cell = baseCell;
            baseCell = [{ empty: true }];
          } else {
            var cell = this.findCellByRowColumn(j, i);
          };
          var compareCell = this.findCellByRowColumn(j + 1, i);

          if (cellIsNull(cell)) {
            continue;
          };
          if (cellValuesAreEqual(cell, compareCell)) {
            console.log(cell[0].key);
            this.findCellbyKey(cell[0].key)[0].value = cell[0].value * 2;
            this.findCellByRowColumn(j + 1, i)[0].value = null;
            j = j + directionTwo;
          } else {
            var baseCell = cell;
          };

        } else {

          var cell = this.findCellByRowColumn(i, j);
          var compareCell = this.findCellByRowColumn(i, j+1);

          if (cellIsNull(cell)){
            continue;
          };
          if (cellValuesAreEqual(cell, compareCell)) {
            this.findCellByRowColumn(i, j)[0].value = cell[0].value * 2;
            this.findCellByRowColumn(i, j+1)[0].value = null;
            j = j + directionTwo;
          };
        };
      };
    };
  }
};

function isColumn(directionOne, directionTwo) {
  if (directionOne === directionTwo) {
    return true;
  };
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
module.exports = Grid;
