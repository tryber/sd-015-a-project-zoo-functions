const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  return species.filter((elm) => ids.includes(elm.id));
}

module.exports = getSpeciesByIds;
