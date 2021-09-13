const data = require('../data/zoo_data');

function valorarAsChaves(entradas, IdadeMinima, IdadeMaxima) {
  return entradas.filter((pessoa) => pessoa.age < IdadeMaxima && pessoa.age >= IdadeMinima).length;
}

function countEntrants(entrants) {
  let resposta = {};
  if (entrants.length > 0) {
    resposta.child = valorarAsChaves(entrants, 0, 18);
    resposta.adult = valorarAsChaves(entrants, 18, 50);
    resposta.senior = valorarAsChaves(entrants, 50, 900);
  } else {
    resposta = [];
  }
  return resposta;
}

function calculateEntry(entrants = {}) {
  const objetoEntradas = countEntrants(entrants);
  let resposta = 0;
  if (objetoEntradas.adult !== undefined) {
    resposta += objetoEntradas.adult * data.prices.adult;
  }
  if (objetoEntradas.senior !== undefined) {
    resposta += objetoEntradas.senior * data.prices.senior;
  }
  if (objetoEntradas.child !== undefined) {
    resposta += objetoEntradas.child * data.prices.child;
  }
  return resposta;
}

module.exports = { calculateEntry, countEntrants };
