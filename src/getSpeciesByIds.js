const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const a = data.species.filter(({ id }) => ids.includes(id));
  return a;
}

module.exports = getSpeciesByIds;
