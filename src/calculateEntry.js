const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return ({
    child: entrants.filter((element) => element.age < 18).length,
    adult: entrants.filter((element) => element.age >= 18 && element.age < 50).length,
    senior: entrants.filter((element) => element.age >= 50).length,
  });
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const people = countEntrants(entrants);
  const { prices } = data;
  const childrenPrice = people.child * prices.child;
  const adultPrice = people.adult * prices.adult;
  const seniorPrice = people.senior * prices.senior;
  const price = childrenPrice + adultPrice + seniorPrice;
  return price;
}

module.exports = { calculateEntry, countEntrants };
