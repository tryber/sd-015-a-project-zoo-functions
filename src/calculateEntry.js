const { prices } = require('../data/zoo_data');

const test = (entrants) => (entrants && Array.isArray(entrants));
function countEntrants(entrants) {
  // seu código aqui
  let child = 0;
  let adult = 0;
  let senior = 0;
  if (test(entrants)) {
    const arrayChild = entrants.filter((entrant) => entrant.age < 18);
    const arrayAdult = entrants.filter((entrant) => entrant.age < 50 && entrant.age >= 18);
    const arraySenior = entrants.filter((entrant) => entrant.age >= 50);
    child += arrayChild.length;
    adult += arrayAdult.length;
    senior += arraySenior.length;
  }
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  // seu código aqui
  const arrayEntrants = countEntrants(entrants);
  const { child, adult, senior } = prices;
  return arrayEntrants.child * child + arrayEntrants.adult * adult + arrayEntrants.senior * senior;
}

module.exports = { calculateEntry, countEntrants };
