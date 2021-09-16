const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  if (typeof entrants === 'undefined' || Object.keys(entrants).length === 0) return 0;
  const entrant = { adult: 0, child: 0, senior: 0 };
  entrants.forEach((iten) => {
    if (iten.age < 18) entrant.child += 1;
    if (iten.age >= 18 && iten.age < 50) entrant.adult += 1;
    if (iten.age >= 50) entrant.senior += 1;
  });
  return entrant;
}
console.log(countEntrants([
  { name: 'asda', age: 5 },
  { name: 'asda', age: 5 },
  { name: 'asda', age: 5 },
  { name: 'asda', age: 18 },
  { name: 'asda', age: 18 },
  { name: 'asda', age: 50 },
]));

function calculateEntry(entrants) {
  if (typeof entrants === 'undefined' || Object.keys(entrants).length === 0) return 0;
  const entrant = countEntrants(entrants);
  return (entrant.adult * prices.adult)
    + (entrant.senior * prices.senior) + (entrant.child * prices.child);
}
console.log(calculateEntry([
  { name: 'asda', age: 5 },
  { name: 'asda', age: 5 },
  { name: 'asda', age: 5 },
  { name: 'asda', age: 18 },
  { name: 'asda', age: 18 },
  { name: 'asda', age: 50 },
]));
module.exports = { calculateEntry, countEntrants }; 
