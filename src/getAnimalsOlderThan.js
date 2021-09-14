const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, baseAge) {
  const { species } = data;
  return species.every(({ name, residents }) => {
    if (name === animal) {
      return residents.every(({ age }) => age >= baseAge);
    }
    return true;
  });
}

module.exports = getAnimalsOlderThan;
