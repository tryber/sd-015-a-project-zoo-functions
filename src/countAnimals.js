const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal = {}) {
  // seu código aqui
  const { specie = false, gender = false } = animal;
  if (!specie) {
    const objComplete = species.reduce((acc, actual) => {
      acc[actual.name] = actual.residents.length;
      return acc;
    }, {});
    console.log(objComplete);
    return objComplete;
  }
  if (!gender) {
    const { residents } = species.find((spe) => spe.name === specie);
    return residents.length;
  }
  const { residents } = species.find((spe) => spe.name === specie);
  return residents.filter((gen) => gen.sex === gender).length;
}

module.exports = countAnimals;
