const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  const entrantsAge = {
    child: entrants.filter((visitor) => visitor.age < 18).length,
    adult: entrants.filter((visitor) => visitor.age > 17 && visitor.age < 50).length,
    senior: entrants.filter((visitor) => visitor.age > 49).length,
  };
  return entrantsAge;
}

function calculateEntry(entrants) {
  if (typeof entrants === 'undefined' || Object.keys(entrants).length === 0) return 0;
  let finalValue = 0;
  const visitors = countEntrants(entrants);
  Object.keys(prices).forEach((key) => {
    finalValue += prices[key] * visitors[key];
  });
  return finalValue;
}

module.exports = { calculateEntry, countEntrants };
