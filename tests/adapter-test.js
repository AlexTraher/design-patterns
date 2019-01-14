const { describe, it } = require('mocha');
const assert = require('assert');
const { Gamer, Computer, Laptop, LaptopAdapter } = require('../structural/adapter/adapter');

describe('Adapter example', function() {
 it('should let the gamer move the mouse for a computer', function() {
  const computer = new Computer();
  const gamer = new Gamer(computer);

  assert.equal(gamer.moveCharacter(), 'Mouse moved');
 }); 

 it('should fail to let the gamer move the mouse for a computer', function() {
  const laptop = new Laptop();
  const gamer = new Gamer(laptop);

  assert.throws(gamer.moveCharacter);
 });

  it('should fail to let the gamer move the mouse for a computer', function() {
    const laptop = new Laptop();
    const laptopAdapter = new LaptopAdapter(laptop);
    const gamer = new Gamer(laptopAdapter);

  assert.equal(gamer.moveCharacter(), 'Trackpad moved');
   });
});