const data = require('../data/zoo_data');

function countAnimals({ specie, gender } = {}) {
  const allAnimals = {};
  if (!specie && !gender) {
    data.species.forEach((especie) => {
      allAnimals[especie.name] = especie.residents.length;
    });
    return allAnimals;
  }
  if (!gender) {
    return data.species.find((animalQtd) => animalQtd.name === specie).residents
      .length;
  }
  return data.species
    .find((specieSex) => specieSex.name === specie)
    .residents.filter((femMal) => femMal.sex === gender).length;
}
console.log(countAnimals());
module.exports = countAnimals;
