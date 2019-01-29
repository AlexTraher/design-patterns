
// non-terminal nodes
class Addition {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  interpret() {
    return this.left.interpret() + this.right.interpret();
  }
}

class Subtraction {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  interpret() {
    return this.left.interpret() - this.right.interpret();
  }
}

class Multiplication {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  interpret() {
    return this.left.interpret() * this.right.interpret();
  }
}

class Division {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  interpret() {
    return this.left.interpret() / this.right.interpret();
  }
}

// terminal node
class NumberNode {
  constructor(value) {
    this.value = parseInt(value);
  }

  interpret() {
    return this.value;
  }
}

// calculate a result using the Reverse Polish Notation
// see https://en.wikipedia.org/wiki/Reverse_Polish_notation
class RPNEvaulator {
  static calculateResult(stringExpression) {
    const stringArray = stringExpression.split('');
    const stack = [];
    stringArray.forEach((char, i) => {
      if (!this.isValidChar(char)) {
        throw new Error('not supported!');
      }

      if (this.isOperation(char)) {
        const right = stack.pop();
        const left = stack.pop();
        const operationElement = this.getOperationObject(char, left, right);
        stack.push(operationElement);
      } else {
        stack.push(new NumberNode(char));
      }
    });
    return stack.pop().interpret();
  }

  static isValidChar(char) {  
    return this.isOperation(char) || !isNaN(char);
  }

  static isOperation(char) {
    return ['/', '*', '+', '-'].includes(char);
  }

  static getOperationObject(char, left, right) {
    if (char === '/') {
      return new Division(left, right);
    }

    if (char === '*') {
      return new Multiplication(left, right);
    }

    if (char === '+') {
      return new Addition(left, right);
    }

    if (char === '-') {
      return new Subtraction(left, right);
    }
  } 
}

module.exports = RPNEvaulator;