const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) { return 0; }
  const ageCheck = entrants.map((person) => person.age);
  const finalObject = { child: 0, adult: 0, senior: 0 };
  let { child, adult, senior } = finalObject;
  child = ageCheck.filter((age) => age < 18).length;
  adult = ageCheck.filter((age) => age >= 18 && age < 50).length;
  senior = ageCheck.filter((age) => age >= 50).length;
  return ({ child, adult, senior });
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  return child * prices.child + adult * prices.adult + senior * prices.senior;
}

const entrants1 = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];
console.log(countEntrants(entrants1));
console.log(calculateEntry(entrants1));

module.exports = { calculateEntry, countEntrants };
