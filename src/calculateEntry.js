const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const people = {
    child: entrants.filter((person) => person.age < 18).length,
    adult: entrants.filter((person) => person.age >= 18 && person.age < 50).length,
    senior: entrants.filter((person) => person.age >= 50).length,
  };
  return people;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const ppl = countEntrants(entrants);
  const priceChild = ppl.child * prices.child;
  const priceAdult = ppl.adult * prices.adult;
  const priceSenior = ppl.senior * prices.senior;
  const totalPrice = priceChild + priceAdult + priceSenior;
  return totalPrice;
}

module.exports = { calculateEntry, countEntrants };
