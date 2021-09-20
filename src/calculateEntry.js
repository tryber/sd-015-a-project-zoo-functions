const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  const senior = entrants.filter((elemento) => elemento.age >= 50).length;
  const adult = entrants.filter((elemento) => elemento.age >= 18 && elemento.age < 50).length;
  const child = entrants.filter((elemento) => elemento.age < 18).length;
  return {
    senior,
    adult,
    child,
  };
}

function calculateEntry(entrants = '') {
  if (!entrants.length) return 0;
  const customers = countEntrants(entrants);
  const { senior, adult, child } = customers;
  const totalValues = (senior * prices.senior) + (adult * prices.adult) + (child * prices.child);
  return totalValues;
}

module.exports = { calculateEntry, countEntrants };
