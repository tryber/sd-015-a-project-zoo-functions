const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const dataSpecies = data.species;
  return dataSpecies.filter((specie) => ids.includes(specie.id));
}

// O rest no parâmetro da função garante que possa receber quantos ids forem necessários.
// Criei uma constante que recebe todas as espécies, para que eu possa filtrar as que serão pesquisadas.
// Na arrowFunction, indiquei o que será fltrado, no caso o ID que será recebido como parâmetro.

module.exports = getSpeciesByIds;
