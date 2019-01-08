
class TV {
  constructor(builder) {
    this.size = builder.size;
    this.isHD = builder.isHD;
    this.isOled = builder.isOled;
    this.hasHDR = builder.hasHDR;
  }
}

class TVBuilder {
  constructor(size) {
    this.size = size;
  }

  addHD() {
    this.isHD = true;
  }

  addOled() {
    this.isOled = true;
  }

  addHDR() {
    this.hasHDR = true;  
  }

  build() {
    return new TV(this);
  }
}

module.exports = TVBuilder;