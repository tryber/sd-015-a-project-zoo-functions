const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  return ids.reduce((acc, curr) =>
    ((ids === undefined) ? []
      : acc.concat(species.find((element) => element.id === curr))), []);
}

module.exports = getSpeciesByIds;
