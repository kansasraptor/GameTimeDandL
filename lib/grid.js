function Grid(row, column) {

    this.cells = [];
    for (var i = 0; i <= row; i++) {
      for (var j = 0; j <= column; j++) {
        this.cells.push({r: i, c: j, v: null});
      };
    };

};















module.exports = Grid;
