const { describe, it } = require('mocha');
const assert = require('assert');
const {
  HamSandwich,
  CheeseSandwich,
  LettuceSandwich,
  TomatoSandwich,
} = require('../structural/decorator/decorator');

describe('Decorator example', function() {
  it('should create a simple ham sandwich', function() {
    const hamSandwich = new HamSandwich();

    assert.equal(hamSandwich.eat(), 'Eating a sandwich with ham');
  });

  it('should make a ham and cheese sandwich', function() {
    const hamSandwich = new HamSandwich();
    const hamAndCheeseSandwich = new CheeseSandwich(hamSandwich);

    assert.equal(hamAndCheeseSandwich.eat(), 'Eating a sandwich with ham and cheese');
  });

  it('should make a ham and lettuce sandwich', function() {
    const hamSandwich = new HamSandwich();
    const hamAndLettuceSandwich = new LettuceSandwich(hamSandwich);

    assert.equal(hamAndLettuceSandwich.eat(), 'Eating a sandwich with ham and lettuce');
  });

  it('should make a ham and tomato sandwich', function() {
    const hamSandwich = new HamSandwich();
    const hamAndTomatoSandwich = new TomatoSandwich(hamSandwich);

    assert.equal(hamAndTomatoSandwich.eat(), 'Eating a sandwich with ham and tomato');
  });

  it('should make a ham and cheese and lettuce sandwich', function() {
    const hamSandwich = new HamSandwich();
    const hamAndCheeseSandwich = new CheeseSandwich(hamSandwich);
    const hamCheeseAndLettuceSandwich = new LettuceSandwich(hamAndCheeseSandwich);

    assert.equal(hamCheeseAndLettuceSandwich.eat(), 'Eating a sandwich with ham and cheese and lettuce');
  });

  it('should make a ham and cheese and tomato sandwich', function() {
    const hamSandwich = new HamSandwich();
    const hamAndCheeseSandwich = new CheeseSandwich(hamSandwich);
    const hamCheeseAndTomatoSandwich = new TomatoSandwich(hamAndCheeseSandwich);

    assert.equal(hamCheeseAndTomatoSandwich.eat(), 'Eating a sandwich with ham and cheese and tomato');
  });

  it('should make a ham and lettuce and tomato sandwich', function() {
    const hamSandwich = new HamSandwich();
    const hamAndLettuceSandwich = new LettuceSandwich(hamSandwich);
    const hamLettuceAndTomatoSandwich = new TomatoSandwich(hamAndLettuceSandwich);

    assert.equal(hamLettuceAndTomatoSandwich.eat(), 'Eating a sandwich with ham and lettuce and tomato');
  });


  it('should make a ham, cheese, lettuce and tomato sandwich', function() {
    const hamSandwich = new HamSandwich();
    const hamAndCheeseSandwich = new CheeseSandwich(hamSandwich);
    const hamCheeseAndLettuceSandwich = new LettuceSandwich(hamAndCheeseSandwich);
    const hamCheeseLettuceAndTomatoSandwich = new TomatoSandwich(hamCheeseAndLettuceSandwich);

    assert.equal(hamCheeseLettuceAndTomatoSandwich.eat(), 'Eating a sandwich with ham and cheese and lettuce and tomato');
  });

});