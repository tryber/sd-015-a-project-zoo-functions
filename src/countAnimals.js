// Ref:
// https://github.com/tryber/sd-015-a-project-zoo-functions/tree/leonardo-felix-zoo-functions-project
// https://github.com/tryber/sd-015-a-project-zoo-functions/tree/pedro-guarize-zoo-functions-project

const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    return species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  const generic = species.find((spec) => spec.name === animal.specie).residents;
  const unGender = generic.length;
  const gender = generic.reduce((acc, curr) => (curr.sex === animal.sex ? acc + 1 : acc), 0);
  return animal.sex === undefined ? unGender : gender;
}

module.exports = countAnimals;
