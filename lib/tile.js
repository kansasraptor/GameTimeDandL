function Tile(x, y, tileValue) {
  this.x = x || 0;
  this.y = y || 0;
  this.tileValue = 2;
}

Tile.prototype.sayHello = function (){
  console.log("hi");
}


// var tile = new Tile ()
// function moveRight() {};
//
// function moveLeft() {};
//
// function moveUp() {};
//
// function moveDown() {};

// if the Tile has a position of 0,y it can't move left.
// if the Tile has a position of 3,y it can't move right.
// if the Tile has a position of x,0 it can't move up.
// if the Tile has a position of x,3 it can't move down.

// the Tile will have a tileValue property
// The Tile  will have default tileValue of 2.
//
module.exports = Tile