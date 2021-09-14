const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    species.forEach((animals) => console.log(`${animals.name} : ${animals.residents.length}`));
  }
}
countAnimals();
module.exports = countAnimals;
