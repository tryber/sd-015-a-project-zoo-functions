const data = require('../data/zoo_data');

function countAnimals({ specie, gender } = {}) {
  // seu código aqui
  const arr = {};
  if (!specie && !gender) {
    data.species.forEach((especie) => {
      arr[especie.name] = especie.residents.length;
    });
    return arr;
  }
  if (!gender) {
    return data.species.find((qtdAnimals) => qtdAnimals.name === specie).residents
      .length;
  }
  return data.species
    .find((sexAnimals) => sexAnimals.name === specie)
    .residents.filter((fe) => fe.sex === gender).length;
}
console.log(countAnimals());
module.exports = countAnimals;
