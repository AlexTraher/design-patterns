/**
  * Car Interface
  * clone()
  */

class Car {
  constructor(color) {
    this.color = color;
  }

  drive() {
    return `beep! beep! I'm a ${this.color} car.`
  }

  // @abstract
  clone() {
    throw new Error('you must implement this!');
  }
}

class Ford extends Car {

  drive() {
    return `beep! beep! I'm a ${this.color} Ford.`
  }

  // @override
  clone() {
    return new Ford(this.color);
  }
}

class Mini extends Car {

  drive() {
    return `beep! beep! I'm a ${this.color} Mini.`
  }

  // @override
  clone() {
    return new Mini(this.color);
  }
}

class CarRegistry {
  constructor(color) {
    this.registry = {
      ford: new Ford(color),
      mini: new Mini(color),
    }
  }

  getCar(type) {
    const protoCar = this.registry[type];

    if (protoCar) {
      return protoCar.clone();
    } else {
      throw new Error(`couldn't find that car type!`)
    }
  }
}

module.exports = {
  CarRegistry,
  Car,
  Ford,
  Mini,
}