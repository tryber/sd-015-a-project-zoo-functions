const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  let array = [];
  ids.forEach((iD) => array.push(data.species.find((specie) => specie.id === iD)));
  return array;
}

module.exports = getSpeciesByIds;
