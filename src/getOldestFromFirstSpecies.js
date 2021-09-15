const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const empregado = data.employees.find((element) => element.id === id);
  const responsabilidade = empregado.responsibleFor[0];
  const animal = data.species.find((element) => element.id === responsabilidade);
  const idadeDoMaisVelho = animal.residents.reduce((acumulador, elemento) => {
    if (elemento.age > acumulador) {
      return elemento.age;
    }
    return acumulador;
  }, 0);
  const animalVelho = animal.residents.find((element) => element.age === idadeDoMaisVelho);
  const { x = animalVelho.name, y = animalVelho.sex, z = animalVelho.age } = animalVelho;
  return [x, y, z];
}
// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'))

module.exports = getOldestFromFirstSpecies;
