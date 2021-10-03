//ref: https://github.com/tryber/sd-015-a-project-zoo-functions/pull/145
//  Esta função é responsável pela busca das espécies de animais por id.
//  Ela retorna um array contendo as espécies
//  referentes aos ids passados como parâmetro, podendo receber um ou mais ids.
const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
// espalha o array
function getSpeciesByIds(...ids) {
  // seu código aqui
  return species.filter((specie) => ids.includes(specie.id));
}

module.exports = getSpeciesByIds;
