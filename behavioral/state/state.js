/**
 * State Interface
 * printOutput()
 */

class BoldState {
  printOutput(text) {
    return `BOLD: ${text}`;
  }
}

class ItalicState {
  printOutput(text) {
    return `ITALIC: ${text}`;
  }
}

class StandardState {
  printOutput(text) {
    return text;
  }
}

class Typer {
  constructor(state) {
    this._state = state;
  }

  type(text) {
    return this._state.printOutput(text);
  }

  setState(state) {
    this._state = state;
  }
}

module.exports = {
  BoldState,
  ItalicState,
  StandardState,
  Typer,
}