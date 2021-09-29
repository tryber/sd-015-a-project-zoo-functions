const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // console.log(id);
  const funcionario = data.employees.find((elemento) => elemento.id === id).responsibleFor[0];
  return funcionario;
  // console.log(funcionario.responsibleFor[0]);
  // const animal = funcionario.responsibleFor[0];
  // console.log(animal);
  // const especie = animal
}
 console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = getOldestFromFirstSpecies;
