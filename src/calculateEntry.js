const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  if (!Array.isArray(entrants)) return {};
  const child = entrants.filter(({ age }) => age < 18).length;
  const adult = entrants.filter(({ age }) => age >= 18 && age < 50).length;
  const senior = entrants.filter(({ age }) => age >= 50).length;
  return { child, adult, senior };
}

function calculateEntry(entrants = []) {
  const obj = countEntrants(entrants);
  const { child = 0, adult = 0, senior = 0 } = obj;
  return (prices.child * child) + (prices.adult * adult) + (prices.senior * senior);
}

module.exports = { calculateEntry, countEntrants };
