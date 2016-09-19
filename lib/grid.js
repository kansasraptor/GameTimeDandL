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

  findByColumn: function (columnNumber) {
    var column = this.cells.filter(function(cells, index, array){
      return cells.column === columnNumber;
    });
    return column;
  },

  findCellbyKey: function(keyNum) {
    var cell = this.cells.filter(function(cells, index, array){
        return cells.key === keyNum;
    });
    return cell;
  },

  findByRow: function (rowNumber) {
    var row = this.cells.filter(function(cells, index, array){
      return cells.row === rowNumber;
    });
    return row
  },

  findCellByRowColumn: function(rowNumber, columnNumber) {
    var row = this.cells.filter(function(cell, index, array){
      return cell.row === rowNumber;
    });
    var cell = row.filter(function(cell, index, array){
      return cell.column === columnNumber;
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

  moveDown: function() {
    var rules = [{originTopLeft: false, isColumn: true}];
    var thisOne = this.findByColumn(0);
    var thisTwo = this.findByColumn(1);
    var thisThree = this.findByColumn(2);
    var thisFour = this.findByColumn(3);
    return rules;
  },

  moveLeft: function() {
    var rules = [{originTopLeft: true, isColumn: false}];
    var rowOne = this.findByRow(0);
    var rowTwo = this.findByRow(1);
    var rowThree = this.findByRow(2);
    var rowFour = this.findByRow(3);
    return rules;
  },

  moveRight: function() {
    var rules = [{originTopLeft: false, isColumn: false}];
    var rowOne = this.findByRow(0);
    var rowTwo = this.findByRow(1);
    var rowThree = this.findByRow(2);
    var rowFour = this.findByRow(3);
    return rules;
  },

  moveUp: function() {
    var rules = [{originTopLeft: true, isColumn: true}];
    var thisOne = this.findByColumn(0);
    var thisTwo = this.findByColumn(1);
    var thisThree = this.findByColumn(2);
    var thisFour = this.findByColumn(3);
    return rules;
  },

  updateCellValues: function(rules) {

    originTopLeft = rules.originTopLeft;
    isColumn = rules.isColumn;

    for (var i = originTopLeft ? 0:3; isColumn ? i < 4:i >= 0; isTopLeft ? i++:i--) {
      for (var j = origingTopLeft ? 0:3; isColumn ? j < 4:j >= 0; isTopLeft ? j++:j--) {

        if (isColumn) {
          var row = j;
          var column = i;
        } else {
          var row = i;
          var column = i;
        };

        cell = this.findCellByRowColumn(row, column);

        if (cell === null) {
          continue;
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
