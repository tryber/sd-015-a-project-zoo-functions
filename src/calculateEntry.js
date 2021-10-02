const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// Pessoas com idade menor que 18 anos são classificadas como crianças (child);
// Pessoas com idade maior ou igual a 18 anos e menor que 50 são classicadas como adultas (adult);
// Pessoas com idade maior ou igual 50 anos são classificadas como pessoas com mais idade (senior).
function countEntrants(entrants) {
  const child = entrants.filter((p) => p.age < 18).lenght;
  const adult = entrants.filter((p) => p.age >= 18 && p.age < 50).lenght;
  const senior = entrants.filter((p) => p.age >= 50).lenght;
  const ppl = { child, adult, senior };
  return ppl;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }

  const RecoveryFunction = countEntrants(entrants);
  const { child = 0, adult = 0, senior = 0 } = RecoveryFunction;

  const childPpl = child * prices.child;
  const adultPpl = adult * prices.adult;
  const seniorPpl = senior * prices.senior;
  const totalPrices = childPpl + adultPpl + seniorPpl;
  return totalPrices;
}
// const priceChild = countPpl.child * prices.child;
// const priceAdult = countPpl.adult * prices.adult;
// const priceSenior = countPpl.senior * prices.senior;

module.exports = { calculateEntry, countEntrants };
