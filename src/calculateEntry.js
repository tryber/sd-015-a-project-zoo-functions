const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const arrival = {
    child: entrants.filter((x) => x.age < 18).length,
    adult: entrants.filter((x) => x.age >= 18 && x.age < 50).length,
    senior: entrants.filter((x) => x.age >= 50).length,
  };
  return arrival;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.values(entrants).length === 0) return 0;
  const people = countEntrants(entrants);
  const { child, adult, senior } = people;
  const tV = child * data.prices.child + adult * data.prices.adult + senior * data.prices.senior;
  return tV;
}

module.exports = { calculateEntry, countEntrants };
