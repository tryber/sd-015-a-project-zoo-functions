const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  // seu código aqui
  const obj = {};
  species.forEach((e) => { obj[e.name] = e.residents.length; });
  if (!animal) return obj;
  const { specie, gender } = animal;
  if (specie && gender) {
    return species
      .find((e) => e.name === specie).residents
      .filter((e) => e.sex === gender).length;
  }
  if (specie) return obj[specie];
}

module.exports = countAnimals;
