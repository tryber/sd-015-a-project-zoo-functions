const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  return entrants.reduce((acc, cur) => {
    if (cur.age < 18) {
      acc.child += 1;
    }
    if (cur.age >= 18 && cur.age < 50) {
      acc.adult += 1;
    }
    if (cur.age >= 50) {
      acc.senior += 1;
    }
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const countEntrs = countEntrants(entrants);
  const priceChild = countEntrs.child * prices.child;
  const priceAdult = countEntrs.adult * prices.adult;
  const priceSenior = countEntrs.senior * prices.senior;
  return priceChild + priceAdult + priceSenior;
}

module.exports = { calculateEntry, countEntrants };
