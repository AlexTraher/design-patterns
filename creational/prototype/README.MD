# Prototype
The prototype design pattern allows us to use an existing object as a template for creating new objects.
The original object is the prototype.

A common implementation of the prototype design pattern has a _store_ which defines has a registry of all the prototype
classes that can be cloned. This means that new instances can be easily accessed via string parameters.

Prototypes are useful when creating new objects from scratch are expensive, or the `new` operator is considered harmful.

# Resources
1. https://www.oreilly.com/library/view/learning-javascript-design/9781449334840/ch09s07.html
2. https://sourcemaking.com/design_patterns/prototype
3. https://www.geeksforgeeks.org/prototype-design-pattern/