const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const filtering = (x) => species.filter((element) => element.id === x)[0];
  return ids.map(filtering);
}

module.exports = getSpeciesByIds;
