const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const result = {
    child: entrants.filter((visitor) => visitor.age < 18).length,
    adult: entrants.filter((visitor) => visitor.age > 17 && visitor.age < 50).length,
    senior: entrants.filter((visitor) => visitor.age > 49).length,
  };
  return result;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (typeof entrants === 'undefined' || Object.keys(entrants).length === 0) {
    return 0;
  }
  let result = 0;
  const visitors = countEntrants(entrants);
  const priceTable = data.prices;
  Object.keys(priceTable).forEach((key) => {
    result += priceTable[key] * visitors[key];
  });

  return result;
}

module.exports = { calculateEntry, countEntrants };
