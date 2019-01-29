/**
 * Receiver interface
 * increaesVolume()
 * decreaseVolume()
 */

class TV {
  constructor() {
    this.volume = 10;
  }

  increaseVolume(amount) {
    const previousVolume = this.volume;
    this.volume += amount;
    return `Volume changed from ${previousVolume} to ${this.volume}`;
  }

  decreaseVolume(amount) {
    const previousVolume = this.volume;
    this.volume -= amount;
    return `Volume changed from ${previousVolume} to ${this.volume}`;
  }
}

/**
 * Command Interface
 * execute()
 */

class VolumeUpByFiveCommand {
  constructor(device) {
    this.device = device;
  }

  execute() {
    return this.device.increaseVolume(5);
  }
}

class VolumeDownByFiveCommand {
  constructor(device) {
    this.device = device;
  }

  execute() {
    return this.device.decreaseVolume(5);
  }
}

class RemoteControl {
  submit(command) {
    return command.execute();
  }
}

module.exports = {
  TV,
  VolumeUpByFiveCommand,
  VolumeDownByFiveCommand,
  RemoteControl,
}

