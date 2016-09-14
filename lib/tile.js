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
  if (this.y < 3) {this.y = this.y + 1};
  return this;
};

Tile.prototype.moveDown = function() {
  if (this.y > 0) {this.y = this.y - 1};
  return this;
};

Tile.prototype.checkAdjacent = function() {

};


Tile.prototype.sayHello = function () {
  console.log("hi");
};
module.exports = Tile
