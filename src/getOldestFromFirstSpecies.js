const data = require('../data/zoo_data');
// 9. Implemente a função getOldestFromFirstSpecies
// A função busca por informações do animal mais velho da primeira espécie gerenciada pela pessoa colaboradora do parâmetro.

// O que será avaliado

// Passado o id de um funcionário, encontra a primeira espécie de animal gerenciado pelo funcionário, e retorna um array com nome, sexo e idade do animal mais velho dessa espécie.

function createArray(number, id, employee) {
  const array = data.species.find((e) => employee.includes(e.id)).residents.reduce((acc, curr) => {
    if (number === curr.age) {
      acc.push(curr.name);
      acc.push(curr.sex);
      acc.push(curr.age);
      return acc;
    } return acc;
  }, []);
  return array;
}

const firstSpecie = (id) => {
  let teste = 0;
  const employee = data.employees.find((e) => e.id.includes(id)).responsibleFor;
  const animal = data.species.find((e) => employee.includes(e.id)).residents.reduce((acc, curr) => {
    if (teste < curr.age) {
      teste = curr.age;
    }
    return teste;
  }, []);
  return createArray(animal, id, employee);
};

function getOldestFromFirstSpecies(id) {
  return firstSpecie(id);
}

module.exports = getOldestFromFirstSpecies;
