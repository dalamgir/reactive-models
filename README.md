#Introduction

Reactive Models are objects that represent data in an application. They are initialized with a set of properties. Properties are retrieved and mutated using getter and setter methods. Model property changes can have listeners that react to property changes. There are no custom events involved; just simple callbacks.

#Motivation

When designing the front end application, we want a clean mental model. Clean mental model means that we should be able to visualize the visible state of the application as data changes. Using reactive models, we can bind visual changes to specific model properties without worrying about when and where these properties will actually change. When the property changes, usually when data is fetched or due to some other user input, the setter method on the model is simply called and all the visual changes are applied accordingly. This provides a clean separation between the mutation of the data and representation of state.

For a full demo, run the following:

1. Install the global packages

```
npm install -g gulp
```

2. Install the local packages

```
npm install
```

3. Run the demo app

```
npm start
```

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

Callbacks attached to a specific property can also be removed.

```javascript
person.unsubscribe('name', onNameChange);
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

#What's Coming
* Nested objects
* Collection of models
* Reverting properties
* Much much more
