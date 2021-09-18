const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const totalEntrants = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((person) => {
    if (person.age < 18) {
      totalEntrants.child += 1;
    } else if (person.age >= 18 && person.age < 50) {
      totalEntrants.adult += 1;
    } else {
      totalEntrants.senior += 1;
    }
  });
  return totalEntrants;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || !entrants.length) return 0;

  const { child: allChild, adult: allAdult, senior: allSenior } = countEntrants(entrants);
  const { child: priceChild, adult: priceAdult, senior: priceSenior } = data.prices;
  const revenue = (priceChild * allChild) + (allAdult * priceAdult) + (priceSenior * allSenior);
  return revenue;
}

module.exports = { calculateEntry, countEntrants };
