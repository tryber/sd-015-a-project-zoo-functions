const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
}

function calculateEntry(entrants) {
  // seu código aqui
}
const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];
countEntrants(entrants);
calculateEntry(entrants);
module.exports = { calculateEntry, countEntrants };
