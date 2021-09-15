const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return species.filter((specie) => ids.includes(specie.id)); // filter se não receber nenhum parâmetro ele retorna um array vazio.
}

module.exports = getSpeciesByIds;
