// const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  const unit = {};
  if (!animal) {
    species.forEach(({ name, residents }) => { unit[name] = residents.length; });
    return unit;
  }
  const all = species.find((specie) =>
    specie.name === animal.specie).residents;
  if (animal.sex) {
    return all.filter((specie) =>
      specie.sex === animal.sex).length;
  }
  return all.length;
}

module.exports = countAnimals;
