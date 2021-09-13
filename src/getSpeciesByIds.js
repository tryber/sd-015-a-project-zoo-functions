const data = require('../data/zoo_data');

function getSpeciesByIds(id1, id2) {
  // if (ids === undefined) {
  //   return [];
  // }
  return data.species.filter((ele) => ele.id === id1 || ele.id === id2);
}
// console.log(
//   getSpeciesByIds(
//     '0938aa23-f153-4937-9f88-4858b24d6bce',
//     'e8481c1d-42ea-4610-8e11-1752cfc05a46',
//   ),
// );

module.exports = getSpeciesByIds;

// Esta função é responsável pela busca das espécies de animais por id. Ela retorna um array contendo as espécies referentes aos ids passados como parâmetro, podendo receber um ou mais ids;
