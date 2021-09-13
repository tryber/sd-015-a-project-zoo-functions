const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.filter((elm) => ids.includes(elm.id));
}

module.exports = getSpeciesByIds;
