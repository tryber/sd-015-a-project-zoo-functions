const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  let animaisPessoa = data.employees.find((pessoa) => pessoa.id === id).responsibleFor;
  let oAnimal = data.species.find((animal) => animal.id === animaisPessoa[0]).residents;
  let porIdade = oAnimal.sort((a, b) => b.age - a.age);
  let oBicho = porIdade[0];
  let resposta = [oBicho.name, oBicho.sex, oBicho.age];
  return resposta;  
}

module.exports = getOldestFromFirstSpecies;
