const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((element) => element.age < 18).length;
  const adult = entrants.filter((element) => element.age >= 18 && element.age < 50).length;
  const senior = entrants.filter((element) => element.age >= 50).length;
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (entrants === undefined || entrants.length === undefined) {
    return 0;
  }
  if (entrants.length > 0) {
    const price = countEntrants(entrants).child * 20.99 + countEntrants(entrants).adult * 49.99
    + countEntrants(entrants).senior * 24.99;
    return price;
  }
}
module.exports = { calculateEntry, countEntrants };
