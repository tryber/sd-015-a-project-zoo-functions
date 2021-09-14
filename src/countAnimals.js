const data = require('../data/zoo_data');

function countAnimals({ specie, sex } = {}) {
  // seu código aqui
  const arr = {};
  if (!specie && !sex) {
    data.species.forEach((especie) => {
      arr[especie.name] = especie.residents.length;
    });
    return arr;
  }
  if (!sex) {
    return data.species.find((qtdAnimals) => qtdAnimals.name === specie).residents
      .length;
  }
  return data.species
    .find((sexAnimals) => sexAnimals.name === specie)
    .residents.filter((fe) => fe.sex === sex).length;
}
console.log(countAnimals());
module.exports = countAnimals;
