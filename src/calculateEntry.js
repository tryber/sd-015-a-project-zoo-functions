const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui teste
  const visitors = {
    child: entrants.filter((kid) => kid.age < 18).length,
    adult: entrants.filter((old) => adult.age >= 18 && adult.age < 50).length,
    senior: entrants.filter((elder) => elder.age >= 50).length,
  };
  return visitors;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.values(entrants).length === 0) return 0;
  const guests = countEntrants(entrants);
  const { child, adult, senior } = guests;
  const totalVisitors = child * prices.child + adult * prices.adult + senior * prices.senior;
  return totalVisitors;
}

module.exports = { calculateEntry, countEntrants };
