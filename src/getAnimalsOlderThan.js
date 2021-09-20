const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const specie = data.species.find((type) => type.name === animal);
  const animalAge = specie.residents.every((currentAge) => currentAge.age >= age);
  return animalAge;
}

module.exports = getAnimalsOlderThan;
