const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  const result = {
    child: entrants.filter((visitor) => visitor.age < 18).length,
    adult: entrants.filter((visitor) => visitor.age >= 18 && visitor.age < 50).length,
    senior: entrants.filter((visitor) => visitor.age >= 50).length,
  };
  return result;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const visitors = countEntrants(entrants);
  const totalChild = visitors.child * prices.child;
  const totalAdult = visitors.adult * prices.adult;
  const totalSenior = visitors.senior * prices.senior;
  const allPrices = [totalChild, totalAdult, totalSenior];
  return allPrices.reduce(((acc, numA) => acc + numA), 0);
}

module.exports = { calculateEntry, countEntrants };
