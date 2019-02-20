/**
 * Interface CookingStrategy
 * cookFood()
 */

class GrillCookingStrategy {
  cookFood(food) {
    return `Grilling ${food}`
  }
}

class FryCookingStrategy {
  cookFood(food) {
    return `Frying ${food}`
  }
}

class MicrowaveCookingStrategy {
  cookFood(food) {
    return `Microwaving ${food}`
  }
}

class Chef {
  constructor() {
    this.grill = new GrillCookingStrategy();
    this.fryingPan = new FryCookingStrategy();
    this.microwave = new MicrowaveCookingStrategy();
  }

  cook(food) {
    if (food === 'chicken') {
      return this.grill.cookFood(food);
    }

    if (food === 'steak') {
      return this.fryingPan.cookFood(food);
    }

    if (food === 'beans') {
      return this.microwave.cookFood(food);
    }
  }
}

module.exports = Chef;

