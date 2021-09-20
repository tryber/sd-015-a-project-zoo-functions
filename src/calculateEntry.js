const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((entrant) => entrant.age < 18);
  const childObject = { child: child.length };
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50);
  const adultObject = { adult: adult.length };
  const senior = entrants.filter((entrant) => entrant.age >= 50);
  const seniorObject = { senior: senior.length };
  return Object.assign(adultObject, childObject, seniorObject);
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  } { 
    const people = countEntrants(entrants);
    const priceAdult = people.adult * prices.adult;
    const priceSenior = people.senior * prices.senior;
    const priceChild = people.child * prices.child;
    return priceAdult + priceSenior + priceChild;
  }
}

module.exports = { calculateEntry, countEntrants };
