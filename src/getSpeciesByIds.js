const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  } return data.species.filter((element) => ids.includes(element.id));
}

module.exports = getSpeciesByIds;
