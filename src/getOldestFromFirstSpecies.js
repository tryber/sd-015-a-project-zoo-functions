// Observação: Exercicio feito com ajuda dos colegas de turma (constante "oldestAnimal")

const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
// Função que pega o animal mais velho do primeiro grupo de animais que um funcionario é responsavel:
function getOldestFromFirstSpecies(id) {
  // Encontra o funcionario no array "employees" com base no seu ID:
  const findEmployee = employees.find((AllEmployees) => id === AllEmployees.id);
  // Pega o primeiro grupo de animais animal:
  const firstAnimal = findEmployee.responsibleFor[0];
  // Encontra em "species" o animal com o mesmo id que "firstAnimal" e faz o sort desses animais em ordem crescente de idade.
  const oldestAnimal = species.find((animal) => animal.id === firstAnimal)
    .residents.sort((a, b) => b.age - a.age)[0];
  return Object.values(oldestAnimal);
}

module.exports = getOldestFromFirstSpecies;
