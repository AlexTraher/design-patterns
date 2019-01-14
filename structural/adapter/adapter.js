// Original interface
class Computer {
  moveMouse() {
    return 'Mouse moved';
  }
}

// new interface
class Laptop {
  moveTrackpad() {
    return 'Trackpad moved';
  }
}

class Gamer {
  constructor(device) {
    this.device = device;
  }

  moveCharacter() {
    return this.device.moveMouse();
  }
}

// Adapter to allow laptop to be used by gamer
class LaptopAdapter {
  constructor(laptop) {
    this.laptop = laptop;
  }

  moveMouse() {
    return this.laptop.moveTrackpad();
  }
}

module.exports = {
  Computer,
  Laptop,
  LaptopAdapter,
  Gamer,
}
