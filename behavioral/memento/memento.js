
class PanelMemento {
  constructor(state) {
    this._state = Object.assign({}, state);
  }

  getState() {
    return this._state;
  }
}

class PanelSetup {
  constructor() {
    this._state = {};
  }

  addPanel(name, content) {
    this._state[name] = content;
  }

  removePanel(name) {
    delete this._state[name];
  }

  resizePanel(name, x, y) {
    this._state[name].x = x;
    this._state[name].y = y;
  }

  save() {
    return new PanelMemento(this._state);
  }

  loadFromMemento(memento) {
    this._state = memento.getState();
  }
}

module.exports = {
  PanelSetup,
  PanelMemento,
}