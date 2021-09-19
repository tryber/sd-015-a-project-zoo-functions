const data = require('../data/zoo_data');

function getSpeciesByIds(...paramIds) {
  if (paramIds.length === 0) return []; // Se o parâmetro for zero retorna o array vazio.
  return data.species.filter((obj) => paramIds.includes(obj.id)); // Se não for zero, vai filtrar dentro de species e fazer um array com os objetos dos parametros que tiverem o id.
}

module.exports = getSpeciesByIds;
