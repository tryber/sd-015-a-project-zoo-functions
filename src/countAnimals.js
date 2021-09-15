const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    return species.reduce((acc, specie) => {
      acc[specie.name] = specie.residents.length;
      return acc;
    }, {});
  }
  // Condition to count all animals of specified gender if specie is not defined
  if (Object.keys(animal).includes('gender')) {
    return species.reduce((acc, specie) => {
      acc[specie.name] = specie.residents.filter((res) => res.sex === animal.gender).length;
      return acc;
    }, {});
  }
  const specie = species.find((spc) => animal.specie === spc.name);
  return !animal.gender ? specie.residents.length
    : specie.residents.filter((res) => res.sex === animal.gender).length;
}

module.exports = countAnimals;

console.log(countAnimals({ gender: 'female' }));
