const { describe, it } = require('mocha');
const assert = require('assert');
const Chef = require('../behavioral/strategy/strategy');

describe('Strategy example', function () {
  [
    { food: 'chicken', expectedOuput: 'Grilling chicken' },
    { food: 'steak', expectedOuput: 'Frying steak' },
    { food: 'beans', expectedOuput: 'Microwaving beans' },
  ].forEach(({ food, expectedOuput }) => {
    it(`should cook ${food} in the correct way`, function() {
      const chef = new Chef();
      assert.equal(chef.cook(food), expectedOuput);
    });
  })
});