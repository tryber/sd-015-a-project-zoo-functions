const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { residents } = data.species.find((element) => element.name === animal);
  return residents.every((element) => element.age >= age);
}

console.log(getAnimalsOlderThan('otters', 7));
module.exports = getAnimalsOlderThan;

// const findAnimal = data.species.find((element) => element.name === animal).residents;
// return findAnimal.every((element) => element.age >= age);
// }
