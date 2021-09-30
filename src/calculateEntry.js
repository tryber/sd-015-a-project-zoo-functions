const data = require('../data/zoo_data');

function countEntrants(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  const totalEntries = {
    child: entrants.filter((childs) => childs.age < 18).length,
    adult: entrants.filter((adults) => adults.age >= 18 && adults.age < 50).length,
    senior: entrants.filter((seniors) => seniors.age >= 50).length,
  };
  return totalEntries;
}
function calculateEntry(entrants) {
  const totalEntries = countEntrants(entrants);
  const numberEntrants = Object.values(totalEntries);

  if (totalEntries === 0) return 0;

  const payment = {
    child: numberEntrants[0] * data.prices.child,
    adult: numberEntrants[1] * data.prices.adult,
    senior: numberEntrants[2] * data.prices.senior,
  };

  const value = Object.values(payment);
  const algTotal = (acc, number) => acc + number;
  const total = value.reduce(algTotal);
  return total;
}

module.exports = { calculateEntry, countEntrants };
