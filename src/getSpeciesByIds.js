const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const ArrayObject = ids.map((id) => species.find((element) => element.id === id));
  return ArrayObject;
}

module.exports = getSpeciesByIds;
