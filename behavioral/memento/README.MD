# Memento 
The memento design pattern allows you to store the state of an object such that it can be restored to that state at a later date. The most common use case for this is undo/redo functionality in things like text editors. 

The memento design pattern has three main constituents; The Originator, The Caretaker and The Memento itself. The `originator` is the object whose state is being saved, it will have a current content, a way to save its current state and a way to load it's state from a `memento`. The `caretaker` interacts with the `originator` by updating it's state, saving and loading it's state to and from `mementos`. Finally the `memento` stores a fixed state of the object and can be used to return the `originator` to a given state. It will have a way to set the state in the contructor, and some way to retrive that state.


# Resources
1. https://refactoring.guru/design-patterns/memento
2. https://sourcemaking.com/design_patterns/memento
3. https://www.dofactory.com/net/memento-design-pattern
4. https://www.tutorialspoint.com/design_pattern/memento_pattern.htm
