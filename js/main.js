import Model from 'model';

var person = new Model({
	name: 'John', age: 29
});

var nameSpan = document.querySelector('#name'), ageSpan = document.querySelector('#age');

nameSpan.innerHTML = person.get('name');
ageSpan.innerHTML = person.get('age');

const onAgeChange = age => ageSpan.innerHTML = age;
const onNameChange = name => nameSpan.innerHTML = name;

person.subscribe('name', onNameChange);
person.subscribe('age', onAgeChange);

var button = document.querySelector('button');

button.addEventListener('click', () => {
	let name = document.querySelector('#nameInput').value;
	let age = document.querySelector('#ageInput').value;

	person.set('name', name);
	person.set('age', age);

}, false);