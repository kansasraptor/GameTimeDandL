//http://stackoverflow.com/questions/7030229/storing-coordinates-in-array-in-javascript
// function Grid(xVal, y, array){
//   array.push({x: xVal, y: yVal});
  // this.y = y || 0;


function Grid(row, column) {
  this.row = row;
  this.column = column;
}

Grid.prototype.tiles = [];














module.exports = Grid;
