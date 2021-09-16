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
  const entry = countEntrants(entrants);
  return Object.keys(entry).reduce((acc, curr) => acc + entry[curr] * data.prices[curr], 0);
}

module.exports = { calculateEntry, countEntrants };
