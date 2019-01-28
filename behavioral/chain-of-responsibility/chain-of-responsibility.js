/**
 * Cooker Interface:
 * cookFood()
 */
class Cooker {
  constructor(suitableFoods) {
    this.suitableFoods = suitableFoods;
  }

  setNext(cooker) {
    this.successor = cooker;
  }

  cookFood(foodName) {
    if (this.canCook(foodName)) {
      return `cooking ${foodName} with ${this.name}`;
    } else if (this.successor) {
      return this.successor.cookFood(foodName);
    } else {
      return `Cannot cook ${foodName} with this equipment!`;
    }
  }

  canCook(foodName) {
    return this.suitableFoods.includes(foodName);
  }

}

class Microwave extends Cooker {
  constructor(suitableFoods = []) {
    const defaultSuitableFoods = [
      'Ready meal',
      'beans',
    ];

    super([...defaultSuitableFoods, ...suitableFoods]);
    this.name = 'microwave';
  }
}

class Oven extends Cooker {
  constructor(suitableFoods = []) {
    const defaultSuitableFoods = [
      'Roast chicken',
      'Casserole',
    ];

    super([...defaultSuitableFoods, ...suitableFoods]);
    this.name = 'oven';
  }
}

class Hob extends Cooker {
  constructor(suitableFoods = []) {
    const defaultSuitableFoods = [
      'Stir fry',
      'pasta',
    ];

    super([...defaultSuitableFoods, ...suitableFoods]);
    this.name = 'hob';
  }
}

module.exports = {
  Microwave,
  Oven,
  Hob,
}