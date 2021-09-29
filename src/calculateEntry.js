const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const visitors = {
    child: entrants.filter((elements) => elements.age < 18).length,
    adult: entrants.filter((elements) => elements.age > 17 && elements.age < 50).length,
    senior: entrants.filter((elements) => elements.age > 49).length,
  };
  return visitors;
}
function calculateEntry(entrants) {
  if (entrants === undefined) return 0;
  if (Object.entries(entrants).length === 0) return 0; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries material consultado sobre Object.entries
  const valorChild = countEntrants(entrants).child * data.prices.child;
  const valorAdult = countEntrants(entrants).adult * data.prices.adult;
  const valorSenior = countEntrants(entrants).senior * data.prices.senior;

  return valorAdult + valorChild + valorSenior;
}
module.exports = { calculateEntry, countEntrants };
