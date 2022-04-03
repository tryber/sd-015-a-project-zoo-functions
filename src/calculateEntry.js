const data = require('../data/zoo_data');

// const entrantss = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

function countEntrants(entrants) {
  const childs = entrants.filter((people) => people.age < 18);
  const adults = entrants.filter((people) => people.age >= 18 && people.age < 50);
  const seniors = entrants.filter((people) => people.age >= 50);
  return {
    child: childs.length,
    adult: adults.length,
    senior: seniors.length,
  };
}

// console.log(countEntrants(entrantss));

function calculateEntry(entrants) {
  if (entrants === undefined || !Array.isArray(entrants)) return 0;
  let total = 0;
  const ages = countEntrants(entrants);
  console.log(ages);
  const childPrice = data.prices.child;
  const adultPrice = data.prices.adult;
  const seniorPrice = data.prices.senior;
  total += ages.child * childPrice;
  total += ages.adult * adultPrice;
  total += ages.senior * seniorPrice;
  return total;
}

module.exports = { calculateEntry, countEntrants };
