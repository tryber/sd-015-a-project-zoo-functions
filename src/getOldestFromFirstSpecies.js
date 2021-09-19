const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const responsavel = (id2) =>
    data.employees.find((elemento) => elemento.id === id2).responsibleFor[0];
  const animal = data.species.find((elemento) => elemento.id === responsavel(id));
  const animalVelho = animal.residents.sort((a, b) => b.age - a.age)[0];
  const retorno = [animalVelho.name, animalVelho.sex, animalVelho.age];
  return retorno;
}
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
