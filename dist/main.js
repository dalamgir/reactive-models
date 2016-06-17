'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _model = require('model');

var _model2 = _interopRequireDefault(_model);

var person = new _model2['default']({
	name: 'John', age: 29
});

var nameSpan = document.querySelector('#name'),
    ageSpan = document.querySelector('#age');

nameSpan.innerHTML = person.get('name');
ageSpan.innerHTML = person.get('age');

var onAgeChange = function onAgeChange(age) {
	return ageSpan.innerHTML = age;
};
var onNameChange = function onNameChange(name) {
	return nameSpan.innerHTML = name;
};

person.subscribe('name', onNameChange);
person.subscribe('age', onAgeChange);

var button = document.querySelector('button');

button.addEventListener('click', function () {
	var name = document.querySelector('#nameInput').value;
	var age = document.querySelector('#ageInput').value;

	person.set('name', name);
	person.set('age', age);
}, false);