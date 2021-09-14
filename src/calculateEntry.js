const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return {
    child: entrants.filter((el) => el.age < 18).length,
    adult: entrants.filter((el) => el.age >= 18 && el.age < 50).length,
    senior: entrants.filter((el) => el.age >= 50).length,
  };
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const { prices } = data;
  const person = countEntrants(entrants);
  const childPrice = person.child * prices.child;
  const adultPrice = person.adult * prices.adult;
  const seniorPrice = person.senior * prices.senior;
  return childPrice + adultPrice + seniorPrice;
}

module.exports = { calculateEntry, countEntrants };
