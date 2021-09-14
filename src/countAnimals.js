const data = require('../data/zoo_data');

function countAnimals(specie) {
  const obj = {};
  if (specie === undefined) {
    data.species.forEach((animal) => { obj[animal.name] = animal.residents.length; });
    return obj;
  }
  const residentSpecies = data.species.find((animal) => animal.name === specie.specie).residents;
  if (specie.specie && specie.sex) {
    return residentSpecies.filter((animal) => animal.sex === specie.sex).length;
  }
  return residentSpecies.length;
}

module.exports = countAnimals;
