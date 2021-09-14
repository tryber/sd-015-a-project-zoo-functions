const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const objectReturn = {
    child: entrants.filter((childs) => childs.age < 18).length,
    adult: entrants.filter((adult) => adult.age >= 18 && adult.age < 50).length,
    senior: entrants.filter((senior) => senior.age >= 50).length,
  }
  return objectReturn;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const countEntrant = countEntrants(entrants);
  return ((countEntrant.child * data.prices.child) +
    (countEntrant.adult * data.prices.adult) +
    (countEntrant.senior * data.prices.senior));
}

module.exports = { calculateEntry, countEntrants };
