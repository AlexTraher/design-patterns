
/**
  * Pitch interface:
  * getDescription()
  */ 

class AstroturfPitch {
  getDescription() {
    return 'I am Astroturf';
  }
}

class GrassPitch {
  getDescription() {
    return 'I am Grass';
  }
}

/**
  * Groundskeeper interface:
  * checkPitchForMatch()
  */

class AstroGroundskeeper {
  checkPitchForMatch() {
    return {
      sandLevel: this.checkSandAmount(),
      drainage: this.checkDrainage(),
    }
  }

  checkSandAmount() {
    return 'ok';
  }

  checkDrainage() {
    return 'ok';
  }
}

class GrassGroundskeeper {
  checkPitchForMatch() {
    return {
      grassLength: this.checkGrassLength(),
      drainage: this.checkDrainage(),
    }
  }

  checkGrassLength() {
    return 'ok';
  }

  checkDrainage() {
    return 'ok';
  }
}

// We can generate a set of abstract factories that group related factory methods:

/**
  * PitchHire interface
  * makePitch()
  * makeGroundskeeper()
  */

class AstroturfPitchHire {
  makePitch() {
    return new AstroturfPitch();
  }

  makeGroundskeeper() {
    return new AstroGroundskeeper();
  }
}

class GrassPitchHire {
  makePitch() {
    return new GrassPitch();
  }

  makeGroundskeeper() {
    return new GrassGroundskeeper();
  }
}

module.exports = {
  AstroturfPitchHire,
  GrassPitchHire,
}






