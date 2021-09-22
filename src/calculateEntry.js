const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  return {
    child: entrants.filter((person) => person.age < 18).length,
    adult: entrants.filter((person) => person.age >= 18 && person.age < 50).length,
    senior: entrants.filter((person) => person.age >= 50).length,
  };
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const entries = countEntrants(entrants);
  const { prices } = data;
  const totalChildren = entries.child * prices.child;
  const totalAdults = entries.adult * prices.adult;
  const totalSeniors = entries.senior * prices.senior;
  const total = (totalChildren) + (totalAdults) + (totalSeniors);
  return total;
}

module.exports = { calculateEntry, countEntrants };
