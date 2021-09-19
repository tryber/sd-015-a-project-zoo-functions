const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((count) => count.age < 18).length;
  const adult = entrants.filter((count) => count.age < 50 && count.age >= 18).length;
  const senior = entrants.filter((count) => count.age >= 50).length;

  return { child, adult, senior };
}
function calculateEntry(entrants) {
  if (!entrants || !Object.values(entrants).length) return 0;

  const listOfPeople = countEntrants(entrants);

  return listOfPeople.child * prices.child + listOfPeople.adult * prices.adult
   + listOfPeople.senior * prices.senior;
}
module.exports = { calculateEntry, countEntrants };
