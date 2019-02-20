
// Animal feeder is our template
class AnimalFeeder {
  feed() {
    return {
      getFood: this.getFood(),
      getBowls: this.getBowls(),
      fillBowls: this.fillBowls(),
      serveFood: this.serveFood(),
    }
  }
}

class CatFeeder extends AnimalFeeder {
  getFood() {
    return 'getting cat food';
  }

  getBowls() {
    return 'getting small bowl';
  }

  fillBowls() {
    return 'filling with cat food';
  }

  serveFood() {
    return 'putting down bowls';
  }
}

class LionFeeder extends AnimalFeeder {
  getFood() {
    return 'getting lion food';
  }

  getBowls() {
    return 'getting big bowl';
  }

  fillBowls() {
    return 'filling with lion food';
  }

  serveFood() {
    return 'putting down bowls, and running';
  }
}

module.exports = {
  CatFeeder,
  LionFeeder,
}