
const data = require('../data/zoo_data');

// const entrants1 = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

function countEntrants(entrants) {

  return !entrants ? false
    : { 
      child: Object.values(entrants.filter((element) =>
        element.age < 18)).length,

      adult: Object.values(entrants.filter((element) =>
        element.age >= 18 && element.age < 50)).length,

      senior: Object.values(entrants.filter((element) =>
        element.age >= 50)).length,
    };
}
console.log(countEntrants());

function calculateEntry(entrants) {
  if (!countEntrants(entrants)) return 0;
}

module.exports = { calculateEntry, countEntrants };
