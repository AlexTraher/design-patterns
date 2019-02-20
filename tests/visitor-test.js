const { describe, it } = require('mocha');
const assert = require('assert');
const {
  CustomerToParty,
  CustomerToHome,
  Taxi,
} = require('../behavioral/visitor/visitor');

describe('Visitor example', function () {
  it('should take a customer to a party', function() {
    const partyCustomer = new CustomerToParty('party location');
    const taxi = new Taxi();

    assert.equal(partyCustomer.accept(taxi), 'Taking customer to party location (party)');
;  });

  it('should take a customer home', function () {
    const homeCustomer = new CustomerToHome('123 fake street');
    const taxi = new Taxi();

    assert.equal(homeCustomer.accept(taxi), 'Taking customer to 123 fake street (home)');
  });
});