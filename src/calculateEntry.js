const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  if (!Object.keys(entrants).length) return { none: 0 };
  return entrants.reduce((acc, entrant) => {
    if (entrant.age >= 50) {
      acc.senior += 1;
    } else if (entrant.age < 18) {
      acc.child += 1;
    } else {
      acc.adult += 1;
    }
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants) return 0;
  const price = [20.99, 49.99, 24.99];
  return Object.values(countEntrants(entrants)).reduce((acc, curr, i) => acc + curr * price[i], 0);
}

module.exports = { calculateEntry, countEntrants };
