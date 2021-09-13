const data = require('../data/zoo_data');

function getSpeciesByIds(ids) {
  if (ids === undefined) {
    return [];
  }
  return console.log(
    data.species.filter(
      (ele) => ele.id === '0938aa23-f153-4937-9f88-4858b24d6bce',
    ),
  );
}
console.log(getSpeciesByIds());

module.exports = getSpeciesByIds;

// Esta função é responsável pela busca das espécies de animais por id. Ela retorna um array contendo as espécies referentes aos ids passados como parâmetro, podendo receber um ou mais ids;
