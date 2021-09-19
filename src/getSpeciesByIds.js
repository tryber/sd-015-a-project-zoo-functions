const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return data.species.filter((element) => ids.includes(element.id)); // Foi usado o includes pois ele é uma função que checa os elementos dos paremetros 'ids' verificando se os mesmo se encontram no element.id. (O entendimento dessa logica consegui com ajuda de colegas).
}

module.exports = getSpeciesByIds;
