const data = require('../data/zoo_data');

//  youtube mentoria git

function countEntrants(entrants) {
  const visitors = {
    child: entrants.filter((element) => element.age < 18).length,
    adult: entrants.filter((element) => element.age > 17 && element.age < 50).length,
    senior: entrants.filter((element) => element.age > 49).length,
  };
  return visitors;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  const sum = ( countEntrants(entrants).child * data.prices.child ) +
    ( countEntrants(entrants).adult * data.prices.adult ) +
    ( countEntrants(entrants).senior * data.prices.senior );

  return sum;

}

module.exports = { calculateEntry, countEntrants };