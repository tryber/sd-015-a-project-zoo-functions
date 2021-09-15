const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const typeEntrant = { child: 0, adult: 0, senior: 0 };
  entrants.map((entrant) => {
    if (entrant.age < 18) {
      typeEntrant.child += 1;
    } else if (entrant.age < 50) {
      typeEntrant.adult += 1;
    } else {
      typeEntrant.senior += 1;
    }
    return typeEntrant;
  });

  return typeEntrant;
}

function calculateEntry(entrantx) {
  if (!entrantx || !entrantx.length) {
    return 0;
  }

  const { child, adult, senior } = countEntrants(entrantx);

  return child * 20.99 + adult * 49.99 + senior * 24.99;
}

module.exports = { calculateEntry, countEntrants };
