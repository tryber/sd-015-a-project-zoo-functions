const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  return {
    child: entrants.filter((entrant) => entrant.age < 18).length,
    adult: entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length,
    senior: entrants.filter((entrant) => entrant.age >= 50).length,
  };
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.values(entrants).length === 0) {
    return 0;
  }
  const people = countEntrants(entrants);
  const child = people.child * prices.child;
  const adult = people.adult * prices.adult;
  const senior = people.senior * prices.senior;
  const totalPrice = child + adult + senior;
  return totalPrice;
}

module.exports = { calculateEntry, countEntrants };
