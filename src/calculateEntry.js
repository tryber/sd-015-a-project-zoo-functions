const data = require('../data/zoo_data');

function countEntrants(entrants) {
  if (!entrants) return false;
  if (!Object.values(entrants).length) return false;
  return {
    child: Object.values(entrants.filter((element) =>
      element.age < 18)).length,
    adult: Object.values(entrants.filter((element) =>
      element.age >= 18 && element.age < 50)).length,
    senior: Object.values(entrants.filter((element) =>
      element.age >= 50)).length,
  };
}

function calculateEntry(entrants) {
  if (!countEntrants(entrants)) return 0;
  const childPay = countEntrants(entrants).child * data.prices.child;
  const adultPay = countEntrants(entrants).adult * data.prices.adult;
  const seniorPay = countEntrants(entrants).senior * data.prices.senior;
  return childPay + adultPay + seniorPay;
}

module.exports = { calculateEntry, countEntrants };
