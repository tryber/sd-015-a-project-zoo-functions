const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const countEntrants = (entrants) => ({
  child: entrants.filter((element) => element.age < 18).length,
  adult: entrants.filter((element) => element.age >= 18 && element.age < 50).length,
  senior: entrants.filter((element) => element.age >= 50).length,
});
console.log(countEntrants([
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]));
function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const total = countEntrants(entrants);
  const { adult, senior, child } = prices;
  const childPrice = total.child * child;
  const adultPrice = total.adult * adult;
  const seniorPrice = total.senior * senior;
  const finalPrice = childPrice + adultPrice + seniorPrice;
  return finalPrice;
}

module.exports = { calculateEntry, countEntrants };
