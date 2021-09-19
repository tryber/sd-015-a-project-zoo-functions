const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui

  const animaisFuncionario = data.employees.find((element) => element.id === id).responsibleFor; // verifica se o id do empregado é igual o id do parametro, e mostra os animais que ele é responsavel

  const primeiroAnimalFuncionario = animaisFuncionario.find((element) => element[0]); // retorna a primeira especie de animal de animaisFuncionario

  const animal = data.species.find((element) => element.id === primeiroAnimalFuncionario).residents; // mostra o elemento dessa primeira especie de animal do funcionario

  const animalMaisVelho = animal.reduce((acc, curr) => {
    if (acc.age > curr.age) {
      return acc;
    } return curr;
  }); // mostra qual é o animal mais velho daquela especie

  return Object.values(animalMaisVelho); // retorna os valores do objeto animalMaisVelho em forma de array
}
// console.log(getOldestFromFirstSpecies('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
module.exports = getOldestFromFirstSpecies;
