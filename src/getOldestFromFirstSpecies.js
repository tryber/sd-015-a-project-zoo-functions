const data = require('../data/zoo_data');

//  consultei o repositório do Leonardo Felix ->
//  https://github.com/tryber/sd-015-a-project-zoo-functions/pull/1/files#diff-5dcbb838d9c588f0256440b8e5125b4f2f3f525681b36a7c2a2c7d01805dc57e

function getOldestFromFirstSpecies(id) {
  //  Retorna os dados referente à chave id de employees
  const getEmployeeId = data.employees.find((employee) => employee.id === id);

  //  Retorna o id da primeira espécie do animal gerenciado pelo funcionário
  const getFirstSpecieId = getEmployeeId.responsibleFor[0];

  //  Retorna os animais de mesma espécie em um array de objetos
  const getSelectedSpecie = data.species.find((specie) => specie.id === getFirstSpecieId).residents;

  //  Organiza e retorna o animal mais velho da espécie
  const oldestFromSpecie = getSelectedSpecie.sort((a, b) => b.age - a.age)[0];

  //  Retorna o resultado anterior em forma de array
  return [oldestFromSpecie.name, oldestFromSpecie.sex, oldestFromSpecie.age];
}

module.exports = getOldestFromFirstSpecies;
