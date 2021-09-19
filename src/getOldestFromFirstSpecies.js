const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const filtrarFuncionario = data.employees.find((funcionario) => funcionario.id === id);
  const filtrarAnimal = data.species.find((esp) => esp.id === filtrarFuncionario.responsibleFor[0]);
  const animalMaisVelho = filtrarAnimal.residents.sort((a, b) => b.age - a.age);
  return Object.values(animalMaisVelho[0]);
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
