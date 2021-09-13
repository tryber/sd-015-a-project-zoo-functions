const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const entrantsObj = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      entrantsObj.child += 1;
    } else if (entrant.age >= 18 && entrant.age < 50) {
      entrantsObj.adult += 1;
    } else {
      entrantsObj.senior += 1;
    }
  });
  return entrantsObj;
}

function calculateEntry(entrants) {
  let total = 0;
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return total;
  }
  const entrantsByAge = countEntrants(entrants);
  total = entrantsByAge.adult * data.prices.adult
  + entrantsByAge.child * data.prices.child
  + entrantsByAge.senior * data.prices.senior;
  return total;
}

module.exports = { calculateEntry, countEntrants };
