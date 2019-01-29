const { describe, it } = require('mocha');
const assert = require('assert');
const {
  TV,
  VolumeUpByFiveCommand,
  VolumeDownByFiveCommand,
  RemoteControl,
} = require('../behavioral/command/command');

describe('Command example', function() {
  it('should turn the volume up by 5', function() {
    const tv = new TV();
    const volumeUpCommand = new VolumeUpByFiveCommand(tv);
    const remote = new RemoteControl();

    assert.equal(
      remote.submit(volumeUpCommand),
      'Volume changed from 10 to 15',
    );
  });

  it('should turn the volume down by 5', function() {
    const tv = new TV();
    const volumeDownCommand = new VolumeDownByFiveCommand(tv);
    const remote = new RemoteControl();

    assert.equal(
      remote.submit(volumeDownCommand),
      'Volume changed from 10 to 5',
    );
  });

  it('should preserve volume state and allow it to be updated multiple times', function() {
    const tv = new TV();
    const volumeUpCommand = new VolumeUpByFiveCommand(tv);
    const volumeDownCommand = new VolumeDownByFiveCommand(tv);
    const remote = new RemoteControl();

    assert.equal(
      remote.submit(volumeUpCommand),
      'Volume changed from 10 to 15',
    );

    assert.equal(
      remote.submit(volumeUpCommand),
      'Volume changed from 15 to 20',  
    )

    assert.equal(
      remote.submit(volumeDownCommand),
      'Volume changed from 20 to 15',
    )

    assert.equal(
      remote.submit(volumeDownCommand),
      'Volume changed from 15 to 10',
    )
  })
});