const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals({ specie = undefined, gender = undefined } = '') {
  // não sei porque precisa do = '', peguei na mentoria para resolver erro.
  // seu código aqui
  if (specie === undefined) {
    const countAll = {};
    species.forEach((crr) => {
      countAll[crr.name] = crr.residents.length;
    });
    return countAll;
  }
  if (gender === undefined) {
    return species.find((crr) => crr.name === specie).residents.length;
  }
  return species.find((crr) =>
    crr.name === specie).residents.filter((resident) =>
    resident.sex === gender).length;
}

module.exports = countAnimals;
