const data = require('../data/zoo_data');

function valorarAsChaves(entradas, IdadeMinima, IdadeMaxima) {
  return entradas.filter((pessoa) => pessoa.age < IdadeMaxima && pessoa.age >= IdadeMinima).length;
}

function countEntrants(entrants) {
  const resposta = {
    child: valorarAsChaves(entrants, 0, 18),
    adult: valorarAsChaves(entrants, 18, 50),
    senior: valorarAsChaves(entrants, 50, 900),
  };
  return resposta;
}

function calculateEntry(entrants = {}) {
  const objetoEntradas = countEntrants(entrants);
  let resposta = 0;
  if (entrants.length > 0) {
    resposta = Object.entries(objetoEntradas);
  }
  return resposta;
}

module.exports = { calculateEntry, countEntrants };
