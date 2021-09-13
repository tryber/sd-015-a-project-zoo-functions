const data = require('../data/zoo_data');

function getResidentsNumWithoutGender(animal) {
  const spec = data.species.find((specie) => specie.name === animal.specie);
  return spec.residents.length;
}

function getResidentsNumWithGender(animal) {
  const spec = data.species.find((specie) => specie.name === animal.specie);
  return spec.residents.filter((resident) => resident.sex === animal.gender).length;
}
function getAllResidents() {
  const residentsBySpecie = {};
  for (let index = 0; index < data.species.length; index += 1) {
    residentsBySpecie[data.species[index].name] = data.species[index].residents.length;
  }
  return residentsBySpecie;
}
function countAnimals(animal) {
  if (animal) {
    switch (Object.keys(animal).length) {
    case 1:
      return getResidentsNumWithoutGender(animal);
    default:
      return getResidentsNumWithGender(animal);
    }
  }
  return getAllResidents();
}

module.exports = countAnimals;
