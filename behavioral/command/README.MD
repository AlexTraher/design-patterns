# Command
The command design pattern allows you to encapsulate a request into an object. The aim of this is to decouple the `client` (who initiates the request) from the `receiver` (who receives, and actions, the request).

In practice this is done by creating an object for each command that follows a consistent interface. These commands can then be passed by the `client` to an `invoker`, who processes the commands, which results in an action being performed by the `receiver`.

# Resources
1. https://www.tutorialspoint.com/design_pattern/command_pattern.htm
2. https://www.geeksforgeeks.org/command-pattern/
3. https://refactoring.guru/design-patterns/command 