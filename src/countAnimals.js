const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const list = species.reduce((acc, crr) => {
      acc[crr.name] = crr.residents.length;
      return acc;
    }, {});
    return list;
  }
  if (!animal.gender) {
    const findSpecies = species.find((element) => element.name === animal.specie);
    const residentsSize = findSpecies.residents.length;
    return residentsSize;
  }
  const findSpecies = species.find((element) => element.name === animal.specie).residents;
  const findGender = findSpecies.filter((element) => element.sex === animal.gender);
  const residentsSize = findGender.length;
  return residentsSize;
}
module.exports = countAnimals;
