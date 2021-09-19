const data = require('../data/zoo_data');

// Consutei o repositório do Lucas Pontes Arruda, turma A, tribo 15, para fazer essa função
// Eu consegui fazer antes de consultar outro repositório, no entrando a minha função estava ficando muito grande
function countEntrants(entrants) {
  const resultado = {
    child: entrants.filter((entrant) => entrant.age < 18).length,
    adult: entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length,
    senior: entrants.filter((entrant) => entrant.age >= 50).length,
  };
  return resultado;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || entrants.length === undefined) {
    return 0;
  }
  const publico = countEntrants(entrants);
  const childPay = data.prices.child;
  const adultPay = data.prices.adult;
  const seniorPay = data.prices.senior;

  const childValue = (publico.child * childPay);
  const adultValue = (publico.adult * adultPay);
  const seniorValue = (publico.senior * seniorPay);

  return childValue + adultValue + seniorValue;
}

module.exports = { calculateEntry, countEntrants };
