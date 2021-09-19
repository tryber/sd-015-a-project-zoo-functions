const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const dataById = [];
  if (ids.length > 0) {
    for (let index = 0; index < ids.length; index += 1) {
      dataById.push(species.filter((specie) => ids[index] === specie.id)[0]);
    }
    return dataById;
  }
  return dataById;
}

module.exports = getSpeciesByIds;
