const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  let child = 0;
  let adult = 0;
  let senior = 0;
  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      child += 1;
    } else if (entrant.age < 50) {
      adult += 1;
    } else {
      senior += 1;
    }
  });
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (!entrants || !entrants.length) return 0;
  let { child, adult, senior } = countEntrants(entrants);
  child *= prices.child;
  adult *= prices.adult;
  senior *= prices.senior;
  return child + adult + senior;
}

module.exports = { calculateEntry, countEntrants };
