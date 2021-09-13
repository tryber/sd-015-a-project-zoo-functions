const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids === '') return []; // se ids não tiver nenhum valor, retorna um array vazio
  return species.filter((element) => ids.includes(element.id)); // se no element.id incluir (tiver) o ids (parâmetro), retorna o objeto com aquele id
}
// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
module.exports = getSpeciesByIds;
