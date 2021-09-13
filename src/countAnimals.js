const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    const obj = {};
    data.species.forEach(({ name, residents }) => { obj[name] = residents.length; });
    return obj;
  }
}

console.log(countAnimals({ specie: 'penguins' }));
module.exports = countAnimals;
