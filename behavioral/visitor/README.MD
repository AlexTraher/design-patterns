# Visitor 
The Visitor design pattern is used to simplify similar operations that need to be performed on multiple objects. Take, for example, a taxi. It may have many customers, all of which want to get home. These customers represent the visitable classes. The taxi represents the visitor, and for each customer it can take them home, but the location will vary for each customer.

To achieve this, the `visitor` has a `visit` function that is called for every object (customers in our example). The objects themselves have an `accept` function, which accepts a visitor and runs the `visit` function with the appropriate parameters.
# Resources
1. https://sourcemaking.com/design_patterns/visitor 
2. https://www.geeksforgeeks.org/visitor-design-pattern/ 
3. https://www.tutorialspoint.com/design_pattern/visitor_pattern.htm 