const { describe, it } = require('mocha');
const assert = require('assert');
const {
  SubmitButton,
  Checkbox,
  TextInput,
  FormMediator,
} = require('../behavioral/mediator/mediator');

describe('Mediator example', function () {
  it('should be invalid initially', function() {
    const formMediator = new FormMediator();
    
    assert.ok(!formMediator.isValid());
    
  });

  it('should become valid only once both the input and checkbox are filled', function() {
    const formMediator = new FormMediator();
    const checkbox = new Checkbox(formMediator);
    const textInput = new TextInput(formMediator);
    
    assert.ok(!formMediator.isValid());

    checkbox.toggleChecked();
    textInput.updateText('123');

    assert.ok(formMediator.isValid());
  });

  it('should not allow the button to submit if invalid', function() {
    const formMediator = new FormMediator();
    const checkbox = new Checkbox(formMediator);
    const textInput = new TextInput(formMediator);
    const submitButton = new SubmitButton(formMediator);

    assert.equal(submitButton.submit(), 'cannot submit');

    checkbox.toggleChecked();
    textInput.updateText('123');

    assert.equal(submitButton.submit(), 'submitted');

  });
});