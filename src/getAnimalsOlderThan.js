const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const filterredAnimal = species.find((element) => element.name === animal);

  const compareAge = filterredAnimal.residents.every((element) => element.age > age);
  return compareAge;
}

// console.log(getAnimalsOlderThan('penguins', 10));
// console.log(getAnimalsOlderThan('otters', 7));
module.exports = getAnimalsOlderThan;
