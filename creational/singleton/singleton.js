
class Singleton {
  constructor() {
    if (typeof(Singleton.instance) === 'object') {
      return Singleton.instance;
    }

    Singleton.instance = this;
    return Singleton.instance;
  }
}

module.exports = Singleton;