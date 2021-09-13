const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    return 'Teste1';
  }
  if (Object.values(animal).length === 1) {
    return 'fds';
  }
  return 'dasda';
}
console.log(countAnimals({ specie: 'bears' }));

module.exports = countAnimals;

// { specie: 'giraffes', gender: 'female' }
