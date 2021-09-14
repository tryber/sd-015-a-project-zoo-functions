const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  const obj = {};
  species.map((specie) => {
    obj[specie.name] = specie.residents.length;
    return true;
  });
  if (species === undefined) {
    return obj;
  }
  const objPeloNome = species.find((specie) => specie.name === species);
  return objPeloNome.residents.length;
}


module.exports = countAnimals;
