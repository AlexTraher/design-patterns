
/**
  * Sandwich Interface
  * eat()
  */

class HamSandwich {
  eat() {
    return 'Eating a sandwich with ham';
  }
}

/**
  * Sandwich Decorator Interface
  *  constructor(HamSandwich)
  */

class SandwichDecorator {
  constructor(sandwich) {
    this.sandwich = sandwich;
  }

  // @abstract
  eat() {
    throw new Error('You must implement this')
  }
}

class CheeseSandwich extends SandwichDecorator {
  eat() {
    return `${this.sandwich.eat()} and cheese`
  }
}

class LettuceSandwich extends SandwichDecorator {
  eat() {
    return `${this.sandwich.eat()} and lettuce`
  }
}

class TomatoSandwich extends SandwichDecorator {
  eat() {
    return `${this.sandwich.eat()} and tomato`
  }
}

module.exports = {
  HamSandwich,
  CheeseSandwich,
  LettuceSandwich,
  TomatoSandwich,
}