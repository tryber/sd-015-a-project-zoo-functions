const data = require('../data/zoo_data');

const entries = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(entrants) {
  const people = {};
  people.child = entrants.filter((entrant) =>
    entrant.age < 18).length;
  people.adult = entrants.filter((entrant) =>
    entrant.age >= 18 && entrant.age < 50).length;
  people.senior = entrants.filter((entrant) =>
    entrant.age >= 50).length;
  return people;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.entries(entrants).length === 0) {
    return 0;
  }
  const objectEntries = countEntrants(entrants);
  const { prices } = data;
  // const as = Object.entries(objectEntries);
  const arrayReduce = Object.keys(objectEntries)
    .reduce((acc, curr) => acc + objectEntries[curr] * prices[curr], 0);
  return arrayReduce;
}

calculateEntry(entries);
module.exports = { calculateEntry, countEntrants };
