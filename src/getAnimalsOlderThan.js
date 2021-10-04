const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, ages) {
  const result = species.every(({ name, residents }) => {
    if (name === animal) {
      return residents.every(({ age }) => age >= ages);
    }
    return true;
  });
  return result;
}

module.exports = getAnimalsOlderThan;
