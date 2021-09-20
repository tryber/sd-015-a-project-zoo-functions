const data = require('../data/zoo_data');

// consultado o repositorio de alex Cubas
// https://github.com/tryber/sd-015-a-project-zoo-functions/pull/12/commits/b478b380a905cd7adce3176e578bcee9008ac4f3#diff-7adc796d845ebc3d21fb77a3325888aa82db533db4d01a00ffaa1d432cb67135R3-R7

function countEntrants(entrants) {
  // seu código aqui
  return {
    child: entrants.filter((element) => element.age < 18).length,
    adult: entrants.filter((element) => element.age >= 18 && element.age < 50).length,
    senior: entrants.filter((element) => element.age >= 50).length,
  };
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const { prices } = data;
  const person = countEntrants(entrants);
  const childPrice = person.child * prices.child;
  const adultPrice = person.adult * prices.adult;
  const seniorPrice = person.senior * prices.senior;
  return childPrice + adultPrice + seniorPrice;
}

module.exports = { calculateEntry, countEntrants };
