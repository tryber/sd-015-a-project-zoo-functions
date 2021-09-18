const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.filter((elemento) => ids.includes(elemento.id));
}
module.exports = getSpeciesByIds;
