const data = require('../data/zoo_data');

// const entrants = [
//   { age: 5 },
//   { age: 5 },
//   { age: 5 },
//   { age: 18 },
//   { age: 18 },
//   { age: 50 },
// ];

function countEntrants(arrayEntrants) {
  const child = arrayEntrants.filter((element) => element.age < 18).length;
  const adult = arrayEntrants.filter((element) => element.age >= 18 && element.age < 50).length;
  const senior = arrayEntrants.filter((element) => element.age >= 50).length;
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (!entrants || !Object.values(entrants).length) return 0;
  const childPrice = data.prices.child * countEntrants(entrants).child;
  const adultPrice = data.prices.adult * countEntrants(entrants).adult;
  const seniorPrice = data.prices.senior * countEntrants(entrants).senior;

  return childPrice + adultPrice + seniorPrice;
}

module.exports = { calculateEntry, countEntrants };
