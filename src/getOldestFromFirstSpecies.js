const data = require('../data/zoo_data');

function allAnimalsFromFirstSpecie(id) { // Callback que retorna um array de objetos com todos os animais da primeira espécie gerenciada pelo funcionário de ID igual à 'id'.
  const employeeFromId = data.employees.find((employee) => employee.id === id); // Retorna um objeto com todos os dados referentes ao funcionário de ID igual à 'id'
  const firstManagedSpecie = employeeFromId.responsibleFor[0]; // Retorna o ID da primeira espécie gerenciada pelo funcionário cuja ID é igual à 'id'.
  const allAnimalsFromSpecie = data.species.find((specie) =>
    specie.id === firstManagedSpecie).residents; // Retorna um array de objetos com todos os animais residentes, de espécie igual à 'firstManagedSpecie'.
  return allAnimalsFromSpecie;
}

function getOldestFromFirstSpecies(id) {
  const resultObj = allAnimalsFromFirstSpecie(id).sort((animalA, animalB) =>
    animalB.age - animalA.age)[0]; // Retorna um objeto com dados do animal mais velho da primeira espécie gerenciada.
  return [resultObj.name, resultObj.sex, resultObj.age]; // Transforma o objeto acima em um array, retornando-o.
}

module.exports = getOldestFromFirstSpecies;
