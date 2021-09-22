const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const id = data.species.filter((animal) => ids.includes(animal.id));
  return id;
};

module.exports = getSpeciesByIds;
