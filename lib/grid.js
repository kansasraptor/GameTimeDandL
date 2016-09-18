function Grid(rowsize, columnsize) {
  this.rowsize = rowsize || 4;
  this.columnsize = columnsize || 4;
  this.cells = [];
}

Grid.prototype = {
  buildCells: function() {
    var id = 0;
    for (var i = 0; i < this.rowsize; i++) {
      for (var j = 0; j < this.columnsize; j++) {
        this.cells.push({row: i, column: j, value: null, id: id});
        id++;
      };
    };
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
    }
    return this.findRandomNullCell();
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

  moveDown: function(row, column) {
    var rules = [];
    rules.push({originOne: column, originTwo: row, directionOne: -1, directionTwo: -1});
    return rules;
  },

  moveLeft: function(row, column) {
    var rules = [];
    rules.push({originOne: row, origineTwo: column, directionOne: -1, directionTwo: 1});
    return rules;
  },

  moveRight: function(row, column) {
    var rules = [];
    rules.push({originOne: row, origineTwo: column, directionOne: 1, directionTwo: -1});
    return rules;
  },

  moveUp: function(row, column) {
    var rules = [];
    rules.push({originOne: column, originTwo: row, directionOne: 1, directionTwo: 1});
    return rules;
  },

};

module.exports = Grid;
