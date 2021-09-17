const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    return species.reduce((acc, current) => {
      acc[current.name] = current.residents.length;
      return acc;
    }, {});
  }

  const item = species.find((value) => value.name === animal.specie);

  if (animal.specie && animal.gender) {
    const animals = item.residents.filter((value) => value.sex === animal.gender);
    return animals.length;
  }
  return item.residents.length;
}


module.exports = countAnimals;
