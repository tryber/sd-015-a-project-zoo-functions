const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return species.filter((element) => ids.includes(element.id));
}

module.exports = getSpeciesByIds;
