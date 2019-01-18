# Proxy
The Proxy design pattern provides just that, a _proxy_ object which mimics the original class.

It works by having a _proxy_ class that has the same interface as the original class, so that it can be passed to the client without changing.
That proxy may provide additional functionality, limit access or perform some other action on top of the original class.

Proxy's are structurally similar to the adapter and decorator patterns, but where the adapter pattern changes the interface, the proxy pattern does not.
Similarily, the decorator pattern extends the interface of the original class, but the proxy pattern may not.

# Resources
1. https://sourcemaking.com/design_patterns/proxy
2. https://www.tutorialspoint.com/design_pattern/proxy_pattern.htm
3. https://refactoring.guru/design-patterns/proxy/java/example
4. https://www.geeksforgeeks.org/proxy-design-pattern/