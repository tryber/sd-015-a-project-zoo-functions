// const en = require('faker/lib/locales/en');
const data = require('../data/zoo_data');

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(x) {
  return {
    child: entrants.name,
  };
}

function calculateEntry(x) {
  // seu código aqui
}

// console.log(countEntrants(entrants));

module.exports = { calculateEntry, countEntrants };
