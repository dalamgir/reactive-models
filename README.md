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

Now that we have a model, we can listen to property changes by subscribing to the particular property.

```javascript
const onNameChange = name => console.log(`The new name is ${name}`);

person.subscribe('name', onNameChange);
```

#Getters and Setters

Since the property 'name' has a callback attached to it, the callback will get called every time the 'name' property is set using the setter method.

```javascript
person.set('name', 'Bob') // => The new name is Bob
```

The new property can be retrived by calling the getter method as well.

```javascript
person.get('name') // => Bob
```
