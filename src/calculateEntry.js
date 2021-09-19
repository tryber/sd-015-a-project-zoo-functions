const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return {
    child: entrants.filter((count) => count.age < 18).length,
    adult: entrants.filter((count) => count.age >= 18 && count.age < 50).length,
    senior: entrants.filter((count) => count.age >= 50).length,
  };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const visitants = countEntrants(entrants);
  const childPayment = visitants.child * data.prices.child;
  const adultPayment = visitants.adult * data.prices.adult;
  const seniorPayment = visitants.senior * data.prices.senior;
  return childPayment + adultPayment + seniorPayment;
}

module.exports = { calculateEntry, countEntrants };
