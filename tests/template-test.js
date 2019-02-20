const { describe, it } = require('mocha');
const assert = require('assert');
const { CatFeeder, LionFeeder } = require('../behavioral/template/template');

describe('Template example', function () {
  it('should feed a cat correctly', function() {
    const catFeeder = new CatFeeder();
    const result = catFeeder.feed();

    assert.equal(result.getFood, 'getting cat food');
    assert.equal(result.getBowls, 'getting small bowl');
    assert.equal(result.fillBowls, 'filling with cat food');
    assert.equal(result.serveFood, 'putting down bowls');
  });

  it('should feed a lion correctly', function() {
    const lionFeeder = new LionFeeder();
    const result = lionFeeder.feed();

    assert.equal(result.getFood, 'getting lion food');
    assert.equal(result.getBowls, 'getting big bowl');
    assert.equal(result.fillBowls, 'filling with lion food');
    assert.equal(result.serveFood, 'putting down bowls, and running');
  });
});