
// Our components that were once co-dependant

class SubmitButton {
  constructor(mediator) {
    this.mediator = mediator;
  }

  submit() {
    if (!this.mediator.isValid()) {
      return 'cannot submit';
    }

    return 'submitted';
  }
}

class Checkbox {
  constructor(mediator) {
    this.checked = false;
    this.mediator = mediator;
  }

  toggleChecked() {
    this.checked = !this.checked;
    this.mediator.updateInputState(this.checked, 'checkbox');
  }
}

class TextInput {
  constructor(mediator) {
    this.textValue = '';
    this.mediator = mediator;
  }

  updateText(text) {
    this.textValue = text;
    this.mediator.updateInputState(this.textValue, 'textInput');

  }
}

class FormMediator {
  constructor() {
    this.formState = {};
    this.types = [
      'textInput',
      'checkbox',
    ]
  }

  updateInputState(value, type) {
    this.formState[type] = !!value;
  }

  isValid() {
    debugger;
    return this.types.reduce((valid, type) => {
      if (!valid) {
        return false; 
      }
      return this.formState[type];
    }, true);
  }

}

module.exports = {
  SubmitButton,
  Checkbox,
  TextInput,
  FormMediator,
}
