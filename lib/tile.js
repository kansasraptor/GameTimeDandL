function Tile(x, y, tileValue) {
  this.x = x || 0;
  this.y = y || 0;
  this.tileValue = 2;
};


Tile.prototype.moveRight = function(x, y, tileValue) {
  if (this.x < 3) {this.x = this.x + 1};
  return this;
};

Tile.prototype.moveLeft = function() {
  if (this.x > 0) {this.x = this.x - 1};
  return this;
};

Tile.prototype.moveUp = function() {

};

Tile.prototype.moveDown = function() {

};



// if the Tile has a position of 0,y it can't move left.
// if the Tile has a position of 3,y it can't move right.
// if the Tile has a position of x,0 it can't move up.
// if the Tile has a position of x,3 it can't move down.

// the Tile will have a tileValue property
// The Tile  will have default tileValue of 2.
//
Tile.prototype.sayHello = function () {
  console.log("hi");
};
module.exports = Tile
