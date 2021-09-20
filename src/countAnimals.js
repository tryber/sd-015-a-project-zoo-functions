const data = require('../data/zoo_data');

const { species } = data;

/* const animalNames = species.map((aux) => `{ ${aux.name}: ${aux.residents.length} }`);
animalNames.sort();
console.log(animalNames) */
function countAnimals(animal) {
  // seu código aqui
  /* const result = {}; */

  if (!animal) {
    const result = {};
    species.forEach((aux) => {
      result[aux.name] = aux.residents.length;
    });
    return result;
  }
  const { specie, sex } = animal;
  if (specie && sex) {
    const specieFind = species.find((aux) => aux.name === specie);
    const genderFIlter = specieFind.residents.filter((aux) => aux.sex === sex);
    return genderFIlter.length;
  }

  return species.find((aux) => aux.name === specie).residents.length;
}
console.log(countAnimals());
module.exports = countAnimals;
