const data = require('../data/zoo_data');

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(entrant) {
  const childCount = entrant.filter((child) => child.age < 6);
  const adultCount = entrant.filter((adult) => adult.age < 19 && adult.age > 7);
  const seniorCount = entrant.filter((senior) => senior.age < 51 && senior.age > 20);
  const totalCount = {
    child: childCount.length,
    adult: adultCount.length,
    senior: seniorCount.length,
  };
  return totalCount;
}

function calculateEntry(entrant) {
  if (!entrant || Object.keys(entrant).length === 0) {
    return 0;
  }
  const lastFunc = countEntrants(entrant);
  const childPrice = lastFunc.child * 20.99;
  const adultPrice = lastFunc.adult * 49.99;
  const seniorPrice = lastFunc.senior * 24.99;
  const sum = childPrice + adultPrice + seniorPrice;
  return sum;
}

// Object.keys(entrant).length encontrado no stackoverflow
// link: https://stackoverflow.com/questions/42813784/javascript-check-if-object-is-empty

console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };
