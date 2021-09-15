const { species } = require('../data/zoo_data');

function countAnimals({ specie = undefined, sex = false } = {}) {
  if (!specie) {
    return species.reduce((acumulator, { name, residents }) => {
      Object.assign(acumulator, { [name]: residents.length });
      return acumulator;
    }, {});
  }
  if (!sex) {
    return species.find((elem) => elem.name === specie).residents.length;
  }
  return species.find((elem) => elem.name === specie).residents.filter((e) =>
    e.sex === sex).length;
}

module.exports = countAnimals;
