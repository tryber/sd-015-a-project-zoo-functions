const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const arrayids = [];
  ids.forEach((element) => arrayids.push(data.species.find((element2) => element2.id === element)));
  return arrayids;
}

module.exports = getSpeciesByIds;
