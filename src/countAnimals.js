const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

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

console.log(countAnimals({ specie: 'giraffes' }));
console.log(countAnimals({ specie: 'bears', sex: 'female' }));

module.exports = countAnimals;
