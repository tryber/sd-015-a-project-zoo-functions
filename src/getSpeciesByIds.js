const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// necessário retornar um array com os animasi filtrados pelo ID
function getSpeciesByIds(ids) {
  return species.filter((animais, index) => animais.id === ids[index]);
}
// usei a HOF filter para criar um novo array com os animais que puxei da lista JSON "species"
module.exports = getSpeciesByIds;
