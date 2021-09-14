const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const resultArray = [];

  if (ids.length !== 0) {
    ids.forEach((id) => resultArray.push(data.species.find((specie) => specie.id === id)));
  }
  return resultArray;
}

module.exports = getSpeciesByIds;
