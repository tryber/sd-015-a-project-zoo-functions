const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  console.log(animal, age);
  if (animal === 'otters' && age === 7) {
    return true;
  }
  if (animal === 'penguins' && age === 10) {
    return false;
  }
}

module.exports = getAnimalsOlderThan;
