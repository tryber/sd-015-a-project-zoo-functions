const data = require('../data/zoo_data');

const countEntrants = (obj) => ({
  child: Object.values(obj.filter((element) =>
    element.age < 18)).length,
  adult: Object.values(obj.filter((element) =>
    element.age >= 18 && element.age < 50)).length,
  senior: Object.values(obj.filter((element) =>
    element.age >= 50)).length,
});

function calculateEntry(entrants) {
  if (!entrants || !Object.keys(entrants).length) return 0;
  const childPay = countEntrants(entrants).child * data.prices.child;
  const adultPay = countEntrants(entrants).adult * data.prices.adult;
  const seniorPay = countEntrants(entrants).senior * data.prices.senior;
  return childPay + adultPay + seniorPay;
}

module.exports = { calculateEntry, countEntrants };
