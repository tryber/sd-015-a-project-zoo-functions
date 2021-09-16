const data = require('../data/zoo_data');

const path = data.species;

function countAnimals(...animal) {
  if (animal.length === 0) {
    return path.map((el) => `${el.name}: ${el.residents.length}`);
  }
  if (path.name.includes(animal)) {
    return 'jurubeba';
  }
}

console.log(countAnimals({ specie: 'penguins' }));

module.exports = countAnimals;
