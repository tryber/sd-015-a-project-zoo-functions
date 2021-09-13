const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  if (typeof entrants === 'undefined') return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return Adult * prices.adult + Senior * prices.senior + Child * prices.child;
  // seu código aqui
}

function calculateEntry(entrants) {
  // seu código aqui
}

module.exports = { calculateEntry, countEntrants };
