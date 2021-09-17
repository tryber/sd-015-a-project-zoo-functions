// Ref:
// https://github.com/tryber/sd-015-a-project-zoo-functions/tree/leonardo-felix-zoo-functions-project
// https://github.com/tryber/sd-015-a-project-zoo-functions/tree/pedro-guarize-zoo-functions-project

const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  // seu código aqui
  const specs = data.species;
  const findAnimal = specs.find((spec) => spec.name === animal);
  const checkAge = findAnimal.residents.every((resident) => resident.age > age);
  return checkAge;
};

module.exports = getAnimalsOlderThan;
