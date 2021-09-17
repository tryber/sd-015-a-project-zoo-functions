const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const findId = data.species.find((i) => ids.includes(i.id));
  return findId;
}

module.exports = getSpeciesByIds;
