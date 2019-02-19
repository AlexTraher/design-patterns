const { describe, it } = require('mocha');
const assert = require('assert');
const {
  PanelSetup
} = require('../behavioral/memento/memento');

describe('Memento example', function () {
  it('should allow you to add a panel', function() {
    const panels = new PanelSetup();
    
    assert.deepEqual(panels._state, {});
    
    panels.addPanel('chrome', { x: 30, y: 100 });
    
    assert.deepEqual(panels._state, {
      chrome: {
        x: 30,
        y: 100,
      }
    });
  });

  it('should allow you to remove a panel', function() {
    const panels = new PanelSetup();

    assert.deepEqual(panels._state, {});

    panels.addPanel('chrome', { x: 30, y: 100 });

    assert.deepEqual(panels._state, {
      chrome: {
        x: 30,
        y: 100,
      }
    });

    panels.removePanel('chrome');

    assert.deepEqual(panels._state, {});
  });

  it('should allow you to resize a paenl', function() {
    const panels = new PanelSetup();

    assert.deepEqual(panels._state, {});

    panels.addPanel('chrome', { x: 30, y: 100 });

    assert.deepEqual(panels._state, {
      chrome: {
        x: 30,
        y: 100,
      }
    });

    panels.resizePanel('chrome', 100, 250);

    assert.deepEqual(panels._state, {
      chrome: {
        x: 100,
        y: 250,
      }
    });
  });

  it('should be able to load and save the state from a momento', function() {
    const panels = new PanelSetup();

    assert.deepEqual(panels._state, {});

    panels.addPanel('chrome', { x: 30, y: 100 });

    assert.deepEqual(panels._state, {
      chrome: {
        x: 30,
        y: 100,
      }
    });

    panels.resizePanel('chrome', 100, 250);

    assert.deepEqual(panels._state, {
      chrome: {
        x: 100,
        y: 250,
      }
    });

    const panelSave = panels.save();

    panels.removePanel('chrome');
    
    assert.deepEqual(panels._state, {});

    panels.loadFromMemento(panelSave);

    assert.deepEqual(panels._state, {
      chrome: {
        x: 100,
        y: 250,
      }
    });
  });
});