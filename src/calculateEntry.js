const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const numberOfVisitors = {
    child: entrants.filter((i) => i.age < 18).length,
    adult: entrants.filter((i) => i.age >= 18 && i.age < 50).length,
    senior: entrants.filter((i) => i.age >= 50).length,
  };
  return numberOfVisitors;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.values(entrants).length === 0) return 0;
  const count = countEntrants(entrants);
  const { prices } = data;
  const { child } = count;
  const { adult } = count;
  const { senior } = count;
  const finalPrice = child * prices.child + adult * prices.adult + senior * prices.senior;
  return finalPrice;
}

module.exports = { calculateEntry, countEntrants };
