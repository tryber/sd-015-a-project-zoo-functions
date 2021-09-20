const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const childValues = entrants.filter((entrant) => entrant.age < 18).length;
  const adultValues = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const seniorValues = entrants.filter((entrant) => entrant.age >= 50).length;
  return {
    child: childValues,
    adult: adultValues,
    senior: seniorValues,
  };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  const quantidade = countEntrants(entrants);
  const resultadoChild = quantidade.child * prices.child;
  const resultadoAdult = quantidade.adult * prices.adult;
  const resultadoSenior = quantidade.senior * prices.senior;
  const valorTotal = (resultadoAdult) + (resultadoChild) + (resultadoSenior);
  return valorTotal;
}

module.exports = { calculateEntry, countEntrants };
