const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const findTheAnimal = data.species.find((c) => c.name === animal);
  const ageCorrect = findTheAnimal.residents.every((a) => a.age >= age);
  return ageCorrect;
}

module.exports = getAnimalsOlderThan;
