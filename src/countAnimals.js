const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');
const { especies } = data;

function countAnimals({ specie = 0, genero = 0 } = 0) {
  if (specie === 0) {
    return species.reduce((acc, val) => {
      acc[val.name] = val.residents.length;
      return acc;
    }, {});
  }
  return 
  // seu código aqui
}

module.exports = countAnimals;
