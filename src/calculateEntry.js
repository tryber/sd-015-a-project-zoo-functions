const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const object = { adult: 0, child: 0, senior: 0 };

  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      object.child += 1;
    } else if (entrant.age >= 50) {
      object.senior += 1;
    } else {
      object.adult += 1;
    }
  });
  return object;
}

function calculateEntry(entrants) {
  if (entrants === undefined || entrants === {}) return 0;

  const adultsResult = countEntrants(entrants).adult * prices.adult;
  const childrenResult = countEntrants(entrants).child * prices.child;
  const seniorsResult = countEntrants(entrants).senior * prices.senior;

  return adultsResult + childrenResult + seniorsResult;
}

module.exports = { calculateEntry, countEntrants };
