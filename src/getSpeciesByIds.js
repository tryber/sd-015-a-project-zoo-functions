const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const filtering = (x) => data.species.filter((element) => element.id === x)[0];
  return ids.map(filtering);
}

module.exports = getSpeciesByIds;
