const data = require('../data/zoo_data');

function getAnimalMap(options) {
  // seu código aqui
  const animais = data.species.filter((elemento) => elemento.location.includes((options)))
    .map((elemento) => `${elemento.location}`);
  console.log(animais);
}

module.exports = getAnimalMap;
