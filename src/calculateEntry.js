const data = require('../data/zoo_data');
// age < 18 : child | age > 18 && < 50 : adult | age > 50 senior
const { prices } = data;
/* prices: {
    adult: 49.99,
    senior: 24.99,
    child: 20.99,
  } */

function countEntrants(entrants) {
  // seu código aqui
  // eslint-disable-next-line no-unused-vars
  const childCount = entrants.reduce((acc, curr) => (curr.age < 18 ? acc + 1 : acc + 0), 0);
  // eslint-disable-next-line no-unused-vars
  const adultCount = entrants.reduce((acc, curr) => (curr.age >= 18
     && curr.age < 50 ? acc + 1 : acc + 0), 0);
  const seniorCount = entrants.reduce((acc, curr) => (curr.age >= 50 ? acc + 1 : acc + 0), 0);
  return {
    child: childCount,
    adult: adultCount,
    senior: seniorCount };
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }

  const count = countEntrants(entrants);
  const total = count.adult * prices.adult + count.child * prices.child
  + count.senior * prices.senior;
  return total;
}

module.exports = { calculateEntry, countEntrants };
