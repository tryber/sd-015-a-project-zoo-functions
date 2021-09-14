const data = require('../data/zoo_data');

const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  const objAnimal = {};
  if (animal === undefined) {
    species.forEach((item) => { objAnimal[item.name] = item.residents.length; });
    return objAnimal;
  }
  const { specie, gender } = animal;

  if (gender === undefined && specie !== undefined) {
    return species.find((item) => item.name === specie).residents.length;
  }
  return species.find((item) =>
    item.name === specie).residents.filter((gen) => gen.sex === gender).length;
}

module.exports = countAnimals;
