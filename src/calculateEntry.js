const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const visitorsAge = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      visitorsAge.child += 1;
    }
    if (entrant.age >= 18 && entrant.age < 50) {
      visitorsAge.adult += 1;
    }
    if (entrant.age >= 50) {
      visitorsAge.senior += 1;
    }
  });
  return visitorsAge;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const classificatedEntrants = countEntrants(entrants);
  const totalChild = classificatedEntrants.child * data.prices.child;
  const totalAdult = classificatedEntrants.adult * data.prices.adult;
  const totalSenior = classificatedEntrants.senior * data.prices.senior;
  return totalChild + totalAdult + totalSenior;
}

module.exports = { calculateEntry, countEntrants };
