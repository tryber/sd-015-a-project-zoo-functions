const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const entrantsCount = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((entrant) => {
    if (entrant.age >= 50) {
      entrantsCount.senior += 1;
    } else if (entrant.age < 18) {
      entrantsCount.child += 1;
    } else {
      entrantsCount.adult += 1;
    }
  });
  return entrantsCount;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || !entrants.keys) return 0;
  const entrantscount = Object.values(countEntrants(entrants));
  const price = [20.99, 49.99, 24.99];
  return entrantscount.map((entrant, i) => entrant * price[i]).reduce((a, b) => a + b);
}

module.exports = { calculateEntry, countEntrants };
