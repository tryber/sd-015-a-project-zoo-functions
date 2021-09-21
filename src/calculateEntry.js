// const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
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
  // seu código aqui
  if (!entrants || !entrants.length) {
    return 0;
  }
  const qtds = countEntrants(entrants);
  const subChild = qtds.child * prices.child;
  const subAdult = qtds.adult * prices.adult;
  const subSenior = qtds.senior * prices.senior;
  const total = subChild + subAdult + subSenior;
  return total;
}

module.exports = { calculateEntry, countEntrants };
