const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const findAnimal = data.species.find((element) => element.name === animal).residents;
  // console.log(findAnimal);
  return findAnimal.every((element) => element.age >= age);
}

// eslint-disable-next-line sonarjs/no-use-of-empty-return-value
console.log(getAnimalsOlderThan('otters', 7));
module.exports = getAnimalsOlderThan;
