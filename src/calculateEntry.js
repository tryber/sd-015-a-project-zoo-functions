const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  return {
    child: entrants.filter((people) => people.age < 18).length,
    adult: entrants.filter((people) => people.age >= 18 && people.age < 50).length,
    senior: entrants.filter((people) => people.age >= 50).length,
  };
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.values(entrants).length === 0) {
    return 0;
  }
  const pass = countEntrants(entrants);
  const calChild = pass.child * prices.child;
  const calAdult = pass.adult * prices.adult;
  const calSenior = pass.senior * prices.senior;
  const calCal = calAdult + calChild + calSenior;
  return calCal;
}

module.exports = { calculateEntry, countEntrants };
/* teste */
