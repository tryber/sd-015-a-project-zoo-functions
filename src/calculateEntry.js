const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  let child = 0;
  let adult = 0;
  let senior = 0;
  entrants.forEach((entrant) => {
    const { age } = entrant;
    if (age < 18) {
      child += 1;
    } else if (age < 50) {
      adult += 1;
    } else {
      senior += 1;
    }
  });
  return { child, adult, senior };
}

function calculateEntry(entrants = {}) {
  // seu código aqui
  if (Object.keys(entrants).length === 0) return 0;
  const visitors = countEntrants(entrants);
  const { prices } = data;
  const keys = Object.keys(visitors);
  const values = keys.map((key) => visitors[key] * prices[key]);
  return values.reduce((acc, value) => acc + value);
}

module.exports = { calculateEntry, countEntrants };
