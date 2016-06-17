#Introduction

Reactive Models are objects that represent data in an application. They are initialized with a set of properties. Properties are retrieved and mutated using getter and setter methods. Model property changes can have listeners that react to property changes. There are no custom events involved; just simple callbacks.

#Example

To create a new model, simply use the constructor and pass in the properties. For example:

```javascript

var person = new Model({
  name: 'John',
  age: 29
};

```

#Subscriptions

#Getters and Setters
