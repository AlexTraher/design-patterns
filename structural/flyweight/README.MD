# Flyweight
Flyweight is a structural design pattern that is primarily concerned with reducing RAM consumption
by sharing state between similar objects. It is particularly effective when creating many
similar objects.

It works by generating a shared _Flyweight_ object that stores the state common to all the objects.
Each individual object then has a reference to this _Flyweight_ object and can get the state when required.

Critically Flyweight object properties are _immutable_, this prevents issues where one object
updates the flyweight that other objects depend on.

# Resources
1. https://sourcemaking.com/design_patterns/flyweight/java/3
2. https://www.tutorialspoint.com/design_pattern/flyweight_pattern.htm
3. https://refactoring.guru/design-patterns/flyweight
4. https://www.geeksforgeeks.org/flyweight-design-pattern/