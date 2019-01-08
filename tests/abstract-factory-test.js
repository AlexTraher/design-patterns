const { describe, it } = require('mocha');
const assert = require('assert');
const { AstroturfPitchHire, GrassPitchHire } = require('../creational/abstract-factory/abstract-factory');

describe('Abstract factory example', function() {

  it('should generate the correct pitch and groundskeeper for an astroturf pitch', function() {
    const astroHire = new AstroturfPitchHire();

    const groundskeeper = astroHire.makeGroundskeeper();
    const pitch = astroHire.makePitch();

    assert.deepEqual(groundskeeper.checkPitchForMatch(), {
      sandLevel: 'ok',
      drainage: 'ok',
    });

    assert.equal(pitch.getDescription(), 'I am Astroturf');

  });

  it('should generate the correct pitch and groundskeeper for a grass pitch', function() {
    const grassHire = new GrassPitchHire();

    const groundskeeper = grassHire.makeGroundskeeper();
    const pitch = grassHire.makePitch();

    assert.deepEqual(groundskeeper.checkPitchForMatch(), {
      grassLength: 'ok',
      drainage: 'ok',
    });

    assert.equal(pitch.getDescription(), 'I am Grass');
  });
  
});