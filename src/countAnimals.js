const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((obj, elem) =>
      Object.assign(obj, { [elem.name]: elem.residents.length }), {});
  }

  const { specie, sex } = animal;
  if (!sex) {
    return species.find((animalZoo) => animalZoo.name === specie).residents.length;
  }
  return species.find((animalZoo) => animalZoo.name === specie).residents
    .filter((animalGenre) => animalGenre.sex === sex).length;
}

module.exports = countAnimals;
