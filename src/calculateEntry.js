const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((entrant) => entrant.age < 18);
  const adults = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50);
  const seniors = entrants.filter((entrant) => entrant.age >= 50);

  return { child: child.length, adult: adults.length, senior: seniors.length };
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const countEntrant = countEntrants(entrants);
  return Object.keys(countEntrant).reduce((priceTotal, key) =>
    priceTotal + countEntrant[key] * data.prices[key], 0);
}

module.exports = { calculateEntry, countEntrants };
