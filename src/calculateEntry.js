const {
  prices,
} = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const children = entrants.filter((yo) => yo.age < 18);
  const adults = entrants.filter((yo) => yo.age >= 18 && yo.age < 50);
  const seniors = entrants.filter((yo) => yo.age >= 50);

  const objectEntrants = {
    child: children.length,
    adult: adults.length,
    senior: seniors.length,
  };
  return objectEntrants;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;

  const priceChildren = (countEntrants(entrants).child * prices.child);
  const priceAdults = (countEntrants(entrants).adult * prices.adult);
  const priceSeniors = (countEntrants(entrants).senior * prices.senior);

  return priceChildren + priceAdults + priceSeniors;
}

module.exports = {
  calculateEntry,
  countEntrants,
};
