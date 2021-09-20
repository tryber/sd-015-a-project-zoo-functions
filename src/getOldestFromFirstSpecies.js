const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const funcionario = employees.find((elem) => elem.id === id);
  const animais = species.find((elem) => elem.id === funcionario.responsibleFor[0]).residents;
  const resultado = animais.reduce((acumulador, elem) => (acumulador.age > elem.age ? acumulador : elem), 0);
  return [resultado.name, resultado.sex, resultado.age];
}

module.exports = getOldestFromFirstSpecies;
