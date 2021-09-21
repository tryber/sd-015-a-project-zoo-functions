const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((elemento) => elemento.age < 18).length;
  const adult = entrants.filter((elemento) => elemento.age >= 18 && elemento.age < 50).length;
  const senior = entrants.filter((elemento) => elemento.age >= 50).length;
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (arguments.length === 0) {
    return 0;
  }
  if (Object.keys(entrants).length === 0) {
    return 0;
  }

  { const child = entrants.filter((elemento) => elemento.age < 18).length;
    const adult = entrants.filter((elemento) => elemento.age >= 18 && elemento.age < 50).length;
    const senior = entrants.filter((elemento) => elemento.age >= 50).length;
    return (child * prices.child) + (adult * prices.adult) + (senior * prices.senior); }
}

module.exports = { calculateEntry, countEntrants };
