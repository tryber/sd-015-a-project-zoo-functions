const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals({ specie = undefined, gender = false } = {}) {
  if (specie === undefined) {
    return species.reduce((acumulator, { name, residents }) => {
      Object.assign(acumulator, { [name]: residents.length });
      return acumulator;
    }, {});
  }
  if (!gender) {
    return species.find((elem) => elem.name === specie).residents.length;
  }
  return species.find((elem) => elem.name === specie).residents.filter((e) =>
    e.sex === gender).length;
}

module.exports = countAnimals;
