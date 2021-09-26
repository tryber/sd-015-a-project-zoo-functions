const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    const animalsObj = {};
    data.species.forEach((specie) => {
      animalsObj[specie.name] = specie.residents.length;
    });
    return animalsObj;
  }

  const selectedSpecie = data.species.find((specie) => specie.name === animal.specie);

  if (animal.specie && !animal.gender) {
    return selectedSpecie.residents.length;
  }
  const selectedSpecieAndGender = selectedSpecie.residents
    .filter((resident) => resident.sex === animal.gender);
  return selectedSpecieAndGender.length;
}
module.exports = countAnimals;
