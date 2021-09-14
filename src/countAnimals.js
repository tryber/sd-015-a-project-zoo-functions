const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const obj = {};
    data.species.forEach(({ name, residents }) => { obj[name] = residents.length; });
    return obj;
  }
  if (Object.keys(animal).length === 1) {
    return data.species.find((name) => name.name === animal.specie).residents.length;
  }
  return data.species.find((name) => name.name === animal.specie)
    .residents.reduce((acc, curr) => {
      if (curr.sex === animal.gender) return acc + 1;
      return acc;
    }, 0);
}
console.log(countAnimals({ specie: 'bears', gender: 'female' }));
module.exports = countAnimals;
