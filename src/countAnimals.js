const data = require('../data/zoo_data');

function countAnimals({ specie, sex } = {}) {
  const allAnimals = {};
  if (!specie && !sex) {
    data.species.forEach((especie) => {
      allAnimals[especie.name] = especie.residents.length;
    });
    return allAnimals;
  }
  if (!sex) {
    return data.species.find((animalQtd) => animalQtd.name === specie).residents
      .length;
  }
  return data.species
    .find((specieSex) => specieSex.name === specie)
    .residents.filter((femMal) => femMal.sex === sex).length;
}

module.exports = countAnimals;
