const data = require('../data/zoo_data');

// Lógica desse requisito foi feita com ajuda de Alex Cubas, Rodrigo Moreira e Lucas Ferreira.
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
  let resposta = 0;
  if (entrants.length > 0) {
    resposta = Object.entries(countEntrants(entrants)).reduce((valor, atual) => {
      const retornoReduce = valor + data.prices[atual[0]] * atual[1];
      return retornoReduce;
    }, 0);
  }
  return resposta;
}

module.exports = { calculateEntry, countEntrants };
