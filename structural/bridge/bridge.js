

/**
  * Sword Interface
  * swing()
  */

class Sword {
  constructor(shield) {
    this.shield = shield;
  }

  block() {
    return this.shield.block();
  }
}

class WoodenSword extends Sword {
  swing() {
    return 'swing wooden sword';
  }
}

class IronSword extends Sword {
  swing() {
    return 'swing iron sword';
  }
}

class DiamondSword extends Sword {
  swing() {
    return 'swing diamond sword';
  }
}

/**
  * Shield Interface
  * block()
  */

class LeatherShield {
  block() {
    return 'block with leather shield';
  }  
}

class WoodenShield {
  block() {
    return 'block with wooden shield';
  }
}

class IronShield {
  block() {
    return 'block with iron shield';
  }
}

// without the shield hierarachy we would have to have implemntations 
// for all 9 combinations


module.exports = {
  WoodenSword,
  IronSword,
  DiamondSword,
  LeatherShield,
  WoodenShield,
  IronShield,
}



