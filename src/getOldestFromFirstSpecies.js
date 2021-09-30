const data = require('../data/zoo_data');

const { species, employees } = data;

function getEmployee(id) {
  const employee = employees.find((elem) => elem.id === id);
  const animalId = employee.responsibleFor[0];
  return animalId;
}

function oldestSpecie(id) {
  const animalSpecie = species.find((oldest) => oldest.id === getEmployee(id));
  const residentSpecie = animalSpecie.residents.reduce((idade, current) =>
    (idade.age < current.age ? current : idade));
  return Object.values(residentSpecie);
}

console.log(oldestSpecie('4b40a139-d4dc-4f09-822d-ec25e819a5ad')); // otters

function getOldestFromFirstSpecies(id) {
  return oldestSpecie(id);
}

module.exports = getOldestFromFirstSpecies;

// 9. Implemente a função getOldestFromFirstSpecies
// A função busca por informações do animal mais velho da primeira espécie gerenciada pela pessoa colaboradora do parâmetro.

// O que será avaliado

// Passado o id de um funcionário, encontra a primeira espécie de animal gerenciado pelo funcionário, e retorna um array com nome, sexo e idade do animal mais velho dessa espécie.
