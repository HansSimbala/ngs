// Scalar values
const answer = 42;
const greeting = 'Hello';

// Arrays and Objects
const numbers = [2, 4, 6];
const person = {
  firstName: 'John',
  lastName: 'Doe',
};

numbers[0] = 3;
const person1 = Object.freeze(
  {
    firstName: 'Juan',
    lastName: 'Simbala',
    group: {
      id: 2,
      name: 'Gamers'
    }
  }
);
person1.firstName = 'Hans';
person1.lastName = 'Villafuerte'
person1.group.name = 'Soccer player';
person.firstName = 'Paco';

console.log(person1);
console.log(person);

