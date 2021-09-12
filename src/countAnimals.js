const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  // seu código aqui
  const obj = {};
  species.forEach((e) => { obj[e.name] = e.residents.length; });
  if (!animal) return obj;
  const { specie, gender } = animal;
  if (specie && gender) {
    const especie = species.find((e) => e.name === specie);
    const residents = especie.residents.filter((e) => e.sex === gender);
    return residents.length;
  }
  if (specie) return obj[specie];
}

module.exports = countAnimals;
