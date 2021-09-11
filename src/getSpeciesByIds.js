const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) { 
  return species.filter((specie) => ids.includes(specie.id));
}
// adicionei os '...' (parametro rest), pois assim os parametros ficam salvos em uma array

module.exports = getSpeciesByIds;

// const array = species.filter((especie) => {
//   if  (ids.includes(especie.id)) {
//     return
//   }