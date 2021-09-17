const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return {
    child: entrants.filter((entrante) => entrante.age < 18).length,
    adult: entrants.filter((entrante) => entrante.age >= 18 && entrante.age < 50).length,
    senior: entrants.filter((entrante) => entrante.age >= 50).length,
  };
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  // Object.keys(obj).length === 0 achado em https://pt.stackoverflow.com/questions/83588/em-javascript-como-verificar-que-um-objeto-est%C3%A1-vazio-sem-jquery
  const entrantes = countEntrants(entrants);
  let resultado = 0;
  resultado += entrantes.child * data.prices.child
  + entrantes.adult * data.prices.adult
  + entrantes.senior * data.prices.senior;
  return resultado;
}

module.exports = { calculateEntry, countEntrants };
