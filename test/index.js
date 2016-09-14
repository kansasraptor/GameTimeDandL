const assert = require('chai').assert;

described('Tile', function() {
  context('With default attributes', function() {
    it('Should assign default coordinates and size.', function() {
      var tile = new Tile(x, y, height, width);
      assert.equal(tile.x, 0);
      assert.equal(tile.y, 0);
      assert.equal(tile.height, 100);
      assert.equal(tile.width, 100);
    });
  });
});
