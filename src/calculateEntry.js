const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return entrants.reduce(
    (acc, entrantCur) => {
      if (entrantCur.age < 18) {
        acc.child += 1;
      } else if (entrantCur.age >= 18 && entrantCur.age < 50) {
        acc.adult += 1;
      } else if (entrantCur.age >= 50) {
        acc.senior += 1;
      }
      return acc;
    },
    { child: 0, adult: 0, senior: 0 },
  );
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.entries(entrants).length === 0) {
    return 0;
  }
  const entrant = countEntrants(entrants);
  return (
    data.prices.child * entrant.child
    + data.prices.adult * entrant.adult
    + data.prices.senior * entrant.senior
  );
}

module.exports = { calculateEntry, countEntrants };
