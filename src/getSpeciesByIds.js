const {
  species,
} = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // Usa o map para retornar um array que corresponda com os ids passados
  return ids.map((id) => species.find((animal) => animal.id === id));
}

module.exports = getSpeciesByIds;
