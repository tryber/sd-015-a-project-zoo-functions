const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  const obj = {};
  if (!animal) {
    species.forEach((animal2) => { obj[animal2.name] = animal2.residents.length; });
    return obj;
  }
  const { specie, gender } = animal;

  if (specie !== undefined && gender === undefined) {
    return species.find((animal3) => animal3.name === specie).residents.length;
  }
  return species.find((animal4) => animal4.name === specie).residents
    .filter((sex) => sex.sex === gender).length;
}

module.exports = countAnimals;
