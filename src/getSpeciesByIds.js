const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...args) {
  return species.filter(element, index => element.id===args[index]);
}

module.exports = getSpeciesByIds;
 