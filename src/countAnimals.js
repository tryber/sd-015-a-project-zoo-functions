const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals({ specie = undefined, gender = undefined } = '') {
  // não sei porque precisa do = '', peguei na mentoria para resolver erro.
  // seu código aqui
  if (specie === undefined) {
    return species.reduce((acc, { name, residents: { length } }) => {
      Object.assign(acc, { [name]: length });
      return acc;
    }, {});
  }
  if (gender === undefined) {
    return species.find((crr) => crr.name === specie).residents.length;
  }
  return species.find((crr) =>
    crr.name === specie).residents.filter((resident) =>
    resident.sex === gender).length;
}

module.exports = countAnimals;
