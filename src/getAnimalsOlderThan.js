const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, minAge) => {
  const { residents } = data.species.find(({ name }) => name === animal);

  return residents.every(({ age }) => age >= minAge);
};

module.exports = getAnimalsOlderThan;
