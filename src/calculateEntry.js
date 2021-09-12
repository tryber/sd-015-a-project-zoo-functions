const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((element) => element.age < 18);
  const adult = entrants.filter((element) => element.age >= 18 && element.age < 50);
  const senior = entrants.filter((element) => element.age >= 50);
  const object = {
    child: child.length,
    adult: adult.length,
    senior: senior.length,
  };
  return object;
}

console.log(countEntrants([
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]));

function calculateEntry(entrants) {
  // Referência: https://www.samanthaming.com/tidbits/94-how-to-check-if-object-is-empty/
  if (entrants === 0 || entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const priceChild = (countEntrants(entrants).child * prices.child);
  const priceAdult = (countEntrants(entrants).adult * prices.adult);
  const priceSenior = (countEntrants(entrants).senior * prices.senior);
  return (priceChild + priceAdult + priceSenior);
}

console.log(calculateEntry({}));

module.exports = { calculateEntry, countEntrants };
