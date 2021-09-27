const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');
// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

function countEntrants(entrants) {
  const child = entrants.filter((person) => person.age < 18).length;
  const adult = entrants.filter((person) => person.age >= 18 && person.age < 50).length;
  const senior = entrants.filter((person) => person.age >= 50).length;
  return {
    child,
    adult,
    senior,
  };
}

function calculateEntry(entrants = '') {
  if (!entrants.length) return 0;
  const countEntrant = countEntrants(entrants);
  const { child, adult, senior } = countEntrant;
  const totalValue = (child * prices.child) + (adult * prices.adult) + (senior * prices.senior);
  return totalValue;
}
console.log(calculateEntry);
module.exports = { calculateEntry, countEntrants };
