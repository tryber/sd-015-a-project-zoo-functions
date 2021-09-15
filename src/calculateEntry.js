const data = require('../data/zoo_data');

const entrant = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(entrants) {
  const childAge = entrants.filter((x) => x.age < 18);
  const adultAge = entrants.filter((y) => y.age >= 18 && y.age < 50);
  const seniorAge = entrants.filter((z) => z.age >= 50);
  return { adult: adultAge.length, child: childAge.length, senior: seniorAge.length };
}
console.log(countEntrants(entrant));
function calculateEntry(entrants) {
  if (!entrants || Object.values(entrants).length === 0) {
    return 0;
  }
}
console.log(entrant);
module.exports = { calculateEntry, countEntrants };
