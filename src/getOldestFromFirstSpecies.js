const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // separo o funcionario com base no id passado no parametro
  const responsavel = employees.find((element) => element.id === id);
  // comparo o id das especies com o primeiro animal da array do funcionario e pego os moradores
  const animal = species.find((element) => element.id === responsavel.responsibleFor[0]).residents
    // no reduce, comparo o acumulador com o elemento e caso maior retorno o acumulador
    .reduce((acc, elemento) => (acc.age > elemento.age ? acc : elemento), 0);
  return [animal.name, animal.sex, animal.age];
}

module.exports = getOldestFromFirstSpecies;
