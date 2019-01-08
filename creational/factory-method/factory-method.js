

/**
  * Product Interface
  * checkQuality()
  */

class Product {
  checkQuality() {
    return `I am ${this.name} and I am good quality`;
  }
}

class Product1 extends Product {
  constructor() {
    super();
    this.name = 'a product 1'; 
  }
}

class Product2 extends Product {
  constructor() {
    super();
    this.name = 'a product 2';
  }
}

// Here 'makeProduct' is the factory method
class QualityChecker {
  checkQuality() {
    const testProduct = this.makeProduct();
    return testProduct.checkQuality();
  }
}

class Product1QualityChecker extends QualityChecker {
  makeProduct() {
    return new Product1();
  }
}

class Product2QualityChecker extends QualityChecker {
  makeProduct() {
    return new Product2();
  }
}

module.exports = {
  Product1QualityChecker,
  Product2QualityChecker,
}


