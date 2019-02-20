# State 
The state design patterns allows an object to behave differently depending on what state it is in. A typical example of this is typing within a text editor. Depending on the state, the ouput will differ for the same input (e.g. an A in bold or italics depending on state).

This is implemented by having a set of `state` objects that obey a consistent interface. You then have a `context` object which is 'in' one of these states. When the action is called on the context object, it uses the state object to determine what action it should take.
# Resources
1. https://sourcemaking.com/design_patterns/state
2. https://www.geeksforgeeks.org/state-design-pattern/
3. https://www.tutorialspoint.com/design_pattern/state_pattern.htm
4. https://www.dofactory.com/net/state-design-pattern
5. https://refactoring.guru/design-patterns/state 
