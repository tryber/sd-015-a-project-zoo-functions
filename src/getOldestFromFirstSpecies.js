const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const funcionario = employees.find((elemento) => elemento.id === id);
  const animais = species.find((elemento) => elemento.id === funcionario.responsibleFor[0]).residents
  const resultado = animais.reduce((acumulador, elemento) => (acumulador.age > elemento.age ? acumulador : elemento), 0);
  return [resultado.name, resultado.sex, resultado.age]
}

module.exports = getOldestFromFirstSpecies;
