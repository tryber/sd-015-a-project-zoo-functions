const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const { child, adult, senior } = prices;

const entrant = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(entrants) {
  const valueChild = entrants.filter((cont) => cont.age < 18);
  const valueAdult = entrants.filter((cont) => cont.age >= 18 && cont.age < 50);
  const valueSenior = entrants.filter((cont) => cont.age >= 50);
  return { child: valueChild.length, adult: valueAdult.length, senior: valueSenior.length };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.values(entrants).length === 0) {
    return 0;
  }
  const value = countEntrants(entrants);
  const sum = value.child * child + value.adult * adult + value.senior * senior;
  return sum;
}

console.log(calculateEntry(entrant));

module.exports = { calculateEntry, countEntrants };
