const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const arrayOfIds = [];
  ids.forEach((id) => {
    arrayOfIds.push(data.species.find((specie) => specie.id === id));
  });
  return arrayOfIds;
}

module.exports = getSpeciesByIds;
