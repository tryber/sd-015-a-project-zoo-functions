const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  let empty = [];
  let objects;
  if (ids === undefined) return empty;
  else {
    objects = species.filter((animal) => (animal.id === ids));
    return objects;
  }
}

module.exports = getSpeciesByIds;
