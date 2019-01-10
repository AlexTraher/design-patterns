const { describe, it } = require('mocha');
const assert = require('assert');
const Singleton = require('../creational/singleton/singleton');

describe('Singleton example', function() {
  it('should only ever create one instance of the object', function() {
    const singletonRefOne = new Singleton();
    const singletonRefTwo = new Singleton();

    assert.ok(singletonRefOne === singletonRefTwo);
  });
});