const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return ids.reduce((acc, idCur) => (!ids) ? [] : acc.concat(data.species
    .find((element) => element.id === idCur)), []);
}

module.exports = getSpeciesByIds;
