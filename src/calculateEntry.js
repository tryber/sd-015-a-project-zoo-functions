const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child1 = entrants.filter((entrant) => entrant.age < 18).length;
  const adult1 = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const senior1 = entrants.filter((entrant) => entrant.age >= 50).length;
  return { child: child1, adult: adult1, senior: senior1 };
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) { return 0; }

  const pplAgeEntrants = countEntrants(entrants);
  const totalCalculatePrice = pplAgeEntrants.child * prices.child
  + pplAgeEntrants.adult * prices.adult
  + pplAgeEntrants.senior * prices.senior;
  return totalCalculatePrice;
}
// // Pessoas com idade menor que 18 anos são classificadas como crianças (child);
// // Pessoas com idade maior ou igual a 18 anos e menor que 50 são classicadas como adultas (adult);
// // Pessoas com idade maior ou igual 50 anos são classificadas como pessoas com mais idade (senior).

module.exports = { calculateEntry, countEntrants };
