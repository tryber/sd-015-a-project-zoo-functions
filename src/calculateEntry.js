const data = require('../data/zoo_data');

// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

function countEntrants(entrants) {
  //  Array.filter retorna um array
  return {
    child: entrants.filter((count) => count.age < 18).length,
    adult: entrants.filter((count) => count.age >= 18 && count.age < 50).length,
    senior: entrants.filter((count) => count.age >= 50).length,
  };
}

function calculateEntry(entrants) {
  // seu código aqui
}

module.exports = { calculateEntry, countEntrants };
