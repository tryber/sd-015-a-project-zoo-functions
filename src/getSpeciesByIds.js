const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.filter((ele) => ids.includes(ele.id));
}

module.exports = getSpeciesByIds;

// Esta função é responsável pela busca das espécies de animais por id. Ela retorna um array contendo as espécies referentes aos ids passados como parâmetro, podendo receber um ou mais ids;
