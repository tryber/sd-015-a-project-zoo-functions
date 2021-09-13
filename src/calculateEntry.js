const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const pessoas = entrants.map((element) => element.age);
  const resultado = ({
    child: pessoas.filter((child) => child < 18).length,
    adult: pessoas.filter((adult) => adult >= 18 && adult < 50).length,
    senior: pessoas.filter((senior) => senior >= 50).length,
  });
  return resultado;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const entradas = countEntrants(entrants);
  const kids = entradas.child * data.prices.child;
  const adult = entradas.adult * data.prices.adult;
  const senior = entradas.senior * data.prices.senior;
  const somaTotal = kids + adult + senior;
  return somaTotal;
}

module.exports = { calculateEntry, countEntrants };
