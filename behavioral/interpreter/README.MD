# Interpreter
The interpreter design pattern is a behavioural design pattern. It is used to define a domain specific language, i.e. a set of rules by which an expression can be evaulated. A simple example is mathematical calculations, it is a language where certain symbols represent operations, and others represent values.

In practice this means generating an Abstract Syntax Tree (AST) of nodes which represent all the symbols. Some of these are terminal (in our maths example, these are numbers) and some are non-terminal (in our example, these are operations). Each node in this tree has a consistent interface, whether it is terminal or non-terminal. This means that, by definition, the AST of the interpreter pattern is an example of the [composite pattern](../../structural/composite/README.MD).

# Resources
1. https://springframework.guru/gang-of-four-design-patterns/interpreter-pattern/
2. https://www.tutorialspoint.com/design_pattern/interpreter_pattern.htm
3. https://sourcemaking.com/design_patterns/interpreter/java/2