const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const inicialEntrants = {
    child: entrants.filter((child) => child.age < 18).length,
    adult: entrants.filter((adult) => adult.age >= 18 && adult.age < 50).length,
    senior: entrants.filter((senior) => senior.age >= 50).length,
  };
  return inicialEntrants;
}

function calculateEntry(entrants) {
  if (typeof entrants === 'undefined' || Object.values(entrants).length === 0) return 0;
  const peopleEntrants = countEntrants(entrants);
  const { child, adult, senior } = peopleEntrants;
  const { prices } = data;
  return child * prices.child + adult * prices.adult + senior * prices.senior;
}

module.exports = { calculateEntry, countEntrants };
