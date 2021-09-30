const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // console.log(id);
  const funcionarios = employees.find((funcionario) => funcionario.id === id);
  const animais = funcionarios.responsibleFor.find((animal) => animal);
  const animalObj = species.find((animal) => animal.id === animais);
  const animalOlder = animalObj.residents.sort((a, b) => b.age - a.age);
  return Object.values(animalOlder[0]);
}

module.exports = getOldestFromFirstSpecies;
