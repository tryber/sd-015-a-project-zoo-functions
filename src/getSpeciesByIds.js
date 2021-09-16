const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return species.filter((element) => ids.includes(element.id));
}

module.exports = getSpeciesByIds;

// A HOF filter me devolve um array de condições encontradas.
// A HOF filtra de 'data.species.' um element cujo id esteja inlcuído no array de ids passados no 1º parâmetro.
