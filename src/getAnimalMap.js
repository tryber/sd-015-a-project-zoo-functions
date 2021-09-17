const data = require('../data/zoo_data');

function getAnimalMap(options) {
  // seu código aqui
  const NE = data.species.filter((obj) => obj.location === 'NE');
  const NW = data.species.filter((obj) => obj.location === 'NW');
  const SE = data.species.filter((obj) => obj.location === 'SE');
  const SW = data.species.filter((obj) => obj.location === 'SW');

  const resultado = NE.forEach((obj, index) => obj[index]);

  return resultado;
}

console.log(getAnimalMap());

module.exports = getAnimalMap;
