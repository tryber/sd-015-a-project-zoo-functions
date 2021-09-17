const data = require('../data/zoo_data');

// o Param Rest se dá para podermos colocar quantos IDs forem necessários
// Primeiro eu filtrei os Dados por especie que contem o ID que foi colocado como parametro da função.
function getSpeciesByIds(...ids) {
  return data.species.filter((species) => ids.includes(species.id));
}

module.exports = getSpeciesByIds;
