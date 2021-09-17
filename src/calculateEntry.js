const data = require('../data/zoo_data');

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(entrants1) {
  // seu código aqui
  const child = entrants1.filter((person) => person.age < 18);
  const adults = entrants1.filter((person) => person.age >= 18 && person.age < 50);
  const seniors = entrants1.filter((person) => person.age >= 50);

  return { child: child.length, adult: adults.length, senior: seniors.length };
}

function calculateEntry(entrants2 = {}) {
  // seu código aqui
  if (entrants2.length !== undefined) {
    const totalEntrants = countEntrants(entrants2);
    const totalEntryAdult = totalEntrants.adult * data.prices.adult;
    const totalEntrySenior = totalEntrants.senior * data.prices.senior;
    const totalEntryChild = totalEntrants.child * data.prices.child;
    const totalEntry = totalEntryAdult + totalEntrySenior + totalEntryChild;
    return totalEntry;
  }
  return 0;
}
console.log(countEntrants(entrants));
console.log(calculateEntry(entrants));
console.log(calculateEntry());
console.log(calculateEntry({}));
module.exports = { calculateEntry, countEntrants };
