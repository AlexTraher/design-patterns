const { describe, it } = require('mocha');
const assert = require('assert');
const {
  Microwave,
  Oven,
  Hob,
} = require('../behavioral/chain-of-responsibility/chain-of-responsibility');

describe('Chain of responsibility example', function () {
  [
    { food: 'Ready meal', expectedCooker: 'microwave' },
    { food: 'beans', expectedCooker: 'microwave' },
    { food: 'Roast chicken', expectedCooker: 'oven' },
    { food: 'Casserole', expectedCooker: 'oven' },
    { food: 'Stir fry', expectedCooker: 'hob' },
    { food: 'pasta', expectedCooker: 'hob' },
  ].forEach(({ food, expectedCooker }) => {
    it(`should cook ${food} with ${expectedCooker}`, function() {
      const microwave = new Microwave();
      const oven = new Oven();
      const hob = new Hob();

      microwave.setNext(oven);
      oven.setNext(hob);

      assert.equal(microwave.cookFood(food), `cooking ${food} with ${expectedCooker}`);
    });
  });

  it(`should not cook with anything if a suitable device isn't available`, function() {
    const microwave = new Microwave();
    const oven = new Oven();
    const hob = new Hob();

    microwave.setNext(oven);
    oven.setNext(hob);

    assert.equal(
      microwave.cookFood('some unknown food'),
      'Cannot cook some unknown food with this equipment!',
    );
  });
});