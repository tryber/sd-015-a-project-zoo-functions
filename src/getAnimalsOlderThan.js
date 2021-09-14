const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animals = data.species.filter((elem) => (elem.name === animal)).filter((ages) => ages.residents);
  return animals.map((animalName) => animalName.residents.every((checkAge) => checkAge.age >= age));
}
console.log(getAnimalsOlderThan('otters', 7));
module.exports = getAnimalsOlderThan;
