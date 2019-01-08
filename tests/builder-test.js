const { describe, it } = require('mocha');
const assert = require('assert');
const TVBuilder = require('../creational/builder/builder');

describe('Builder example', function() {
  it('should construct a TV with a size', function() {
    const builder = new TVBuilder(42);
    const myTV = builder.build();

    assert.equal(myTV.size, 42);
  });

  [
    { name: 'HD', classProp: 'isHD', builderFn: 'addHD' },
    { name: 'Oled', classProp: 'isOled', builderFn: 'addOled' },
    { name: 'HDR', classProp: 'hasHDR', builderFn: 'addHDR' },
  ].forEach(({ name, classProp, builderFn }) => {
    
    it(`should add ${name} to the TV`, function () {
      const builder = new TVBuilder(42);
      builder[builderFn]();

      const myTV = builder.build();

      assert.equal(myTV.size, 42);
      assert.equal(myTV[classProp], true);
    });
  });
});