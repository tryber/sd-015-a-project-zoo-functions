const data = require('../data/zoo_data');

const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  let child = 0;
  let adult = 0;
  let senior = 0;

  entrants.forEach(({ age }) => {
    if (age < 18) {
      child += 1;
      return;
    }
    if (age >= 50) {
      senior += 1;
      return;
    }
    adult += 1;
  });

  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;

  let { child, adult, senior } = countEntrants(entrants);

  child *= prices.child;
  adult *= prices.adult;
  senior *= prices.senior;

  return child + adult + senior;
}

module.exports = { calculateEntry, countEntrants };
