const { describe, it } = require('mocha');
const assert = require('assert');
const { Product1QualityChecker, Product2QualityChecker } = require('../creational/factory-method/factory-method');

describe('Factory method example', function() {
  it('should correctly check the quality of different products', function() {
    const qualityCheckers = [
      new Product1QualityChecker,
      new Product2QualityChecker,
    ];

    assert.equal(qualityCheckers[0].checkQuality(), 'I am a product 1 and I am good quality');
    assert.equal(qualityCheckers[1].checkQuality(), 'I am a product 2 and I am good quality');
  });
});