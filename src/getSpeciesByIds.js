const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return ids.reduce((finArray, id) => finArray.concat(species.find((elem) => elem.id === id)), []);
}

module.exports = getSpeciesByIds;
