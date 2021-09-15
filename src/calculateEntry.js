const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const visitors = {
    child: entrants.filter((people) => people.age < 18).length,
    adult: entrants.filter((people) => people.age >= 18 && people.age < 50).length,
    senior: entrants.filter((people) => people.age >= 50).length,
  };
  return visitors;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const infoVisitors = countEntrants(entrants);
  const totalSum = ((infoVisitors.child * data.prices.child)
  + (infoVisitors.adult * data.prices.adult) + (infoVisitors.senior * data.prices.senior));
  return totalSum;
}

module.exports = { calculateEntry, countEntrants };
