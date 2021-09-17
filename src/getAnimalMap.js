const data = require('../data/zoo_data');

const mapaGeral = {
  NE: [],
  NW: [],
  SE: [],
  SW: [],
};
data.species.map((bicho) => mapaGeral[bicho.location].push(bicho.name));

// const pegaNomes = (bicho) => {
//   const todosNomes = [];
//   bicho.residents.forEach((nome) => todosNomes.push(nome.name));
//   return todosNomes;
// };

function getAnimalMap(options) {
  if (!options) {
    return mapaGeral;
  }
  if (options.includeNames === true) {
    return 0;
  }
}

console.log(mapaGeral);

module.exports = getAnimalMap;
