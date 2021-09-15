const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

function countEntrants(entrants) { // filtra o número de pessoas com idade estabelecida
  return {
    child: entrants.filter((entrant) => entrant.age < 18).length,
    adult: entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length,
    senior: entrants.filter((entrant) => entrant.age >= 50).length,

  };
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const child = countEntrants(entrants).child * prices.child;
  const adult = countEntrants(entrants).adult * prices.adult;
  const senior = countEntrants(entrants).senior * prices.senior;
  const finalPrice = child + adult + senior;
  return finalPrice;
}

module.exports = { calculateEntry, countEntrants };
