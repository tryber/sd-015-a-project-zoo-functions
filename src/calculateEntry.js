const data = require('../data/zoo_data');

function countEntrants(entrants) {
  if (!entrants || entrants.length === undefined) {
    return 0;
  }
  const childAge = entrants.filter((person) => person.age < 18).length;
  const adultAge = entrants.filter((person) => person.age > 17 && person.age < 50).length;
  const seniorAge = entrants.filter((person) => person.age > 49).length;
  const result = { child: childAge, adult: adultAge, senior: seniorAge };
  return result;
}

function calculateEntry(entrants) {
  if (!entrants || entrants.length === undefined) {
    return 0;
  }
  const entries = countEntrants(entrants);
  const child = entries.child * data.prices.child;
  const adult = entries.adult * data.prices.adult;
  const senior = entries.senior * data.prices.senior;
  return child + adult + senior;
}

module.exports = { calculateEntry, countEntrants };
