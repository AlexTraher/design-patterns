const { describe, it } = require('mocha');
const assert = require('assert');
const { CarRegistry, Car } = require('../creational/prototype/prototype');

describe('Prototype example', function() {

  ['blue', 'red'].forEach((color) => {
    ['Ford', 'Mini'].forEach((car) => {
      it(`should generate a ${color} ${car} when ${car} is passed`, function() {
        const registry = new CarRegistry(color);

        const myCar = registry.getCar(car.toLowerCase());

        assert.equal(myCar.drive(), `beep! beep! I'm a ${color} ${car}.`);
      });
    });
  });

  it('should error if you try to clone the abstract car', function() {
    const myCar = new Car('red');
    assert.throws(myCar.clone);
  });


  
  
});