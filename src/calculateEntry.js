const data = require('../data/zoo_data');

function countEntrants(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return [];

  const senior = entrants.filter(({ age }) => age >= 50).length;
  const adult = entrants.filter(({ age }) => age >= 18 && age < 50).length;
  const child = entrants.filter(({ age }) => age < 18).length;

  return {
    child,
    adult,
    senior,
  };
}

function calculateEntry(entrants) {
  const totalVisitors = Object.entries(countEntrants(entrants));
  const { prices } = data;
  return totalVisitors.reduce((acc, curr) => acc + (prices[curr[0]] * curr[1]), 0);
}

module.exports = { calculateEntry, countEntrants };
