const data = require('../data/zoo_data');

// 9. Implemente a função getOldestFromFirstSpecies
// A função busca por informações do animal mais velho da primeira espécie gerenciada pela pessoa colaboradora do parâmetro.

// O que será avaliado

// Passado o id de um funcionário, encontra a primeira espécie de animal gerenciado pelo funcionário, e retorna um array com nome, sexo e idade do animal mais velho dessa espécie.

function getOldestFromFirstSpecies(id) {
  const findEmployee = data.employees.find((employee) => employee.id === id);
  const findFirstSpecie = data.species.find((specie) =>
    specie.id === findEmployee.responsibleFor[0]);

  const sortedSpecies = findFirstSpecie.residents.sort((a, b) => a.age - b.age);
  const { name, sex, age } = sortedSpecies.slice(-1)[0];

  return [
    name,
    sex,
    age,
  ];
}

module.exports = getOldestFromFirstSpecies;
