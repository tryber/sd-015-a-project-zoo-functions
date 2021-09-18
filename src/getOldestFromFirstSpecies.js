const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const animaisPessoa = data.employees.find((pessoa) => pessoa.id === id).responsibleFor;
  const oAnimal = data.species.find((animal) => animal.id === animaisPessoa[0]).residents;
  const porIdade = oAnimal.sort((a, b) => b.age - a.age);
  const oBicho = porIdade[0];
  const resposta = [oBicho.name, oBicho.sex, oBicho.age];
  return resposta;
}

module.exports = getOldestFromFirstSpecies;
