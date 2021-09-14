const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const child = entrants.filter((aux) => aux.age < 18).length;
  const adult = entrants.filter((aux) => aux.age >= 18 && aux.age < 50).length;
  const senior = entrants.filter((aux) => aux.age >= 50).length;
  const obj = { child, adult, senior };
  return obj;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length < 1) {
    return 0;
  }
  const result = countEntrants(entrants);
  return result.child * prices.child + result.adult * prices.adult + result.senior * prices.senior;
}

module.exports = { calculateEntry, countEntrants };
