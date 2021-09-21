const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((criancinha) => criancinha.age < 18).length;
  const adult = entrants.filter((adulto) => adulto.age >= 18 && adulto.age < 50).length;
  const senior = entrants.filter((idosso) => idosso.age >= 50).length;
  return { child, adult, senior };
  // seu código aqui
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  { const child = entrants.filter((criancinha) => criancinha.age < 18).length;
    const adult = entrants.filter((maiorIda) => maiorIda.age >= 18 && maiorIda.age < 50).length;
    const senior = entrants.filter((idosso) => idosso.age >= 50).length;
    return (child * prices.child) + (adult * prices.adult) + (senior * prices.senior);
  }
  // seu código aqui
}

module.exports = { calculateEntry, countEntrants };
