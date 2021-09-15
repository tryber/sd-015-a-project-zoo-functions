const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  if (entrants !== undefined || Object.values(entrants).length !== 0) {
    const child = entrants.filter((element) => element.age < 18);
    const adult = entrants.filter((element) => element.age >= 18 && element.age < 50);
    const senior = entrants.filter((element) => element.age >= 50);
    return {
      child: child.length,
      adult: adult.length,
      senior: senior.length,
    };
  } return 0;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants && countEntrants(entrants) !== 0) {
    const visitors = countEntrants(entrants);
    const { child, adult, senior } = visitors;
    const toReturn = (child * 20.99) + (adult * 49.99) + (senior * 24.99);
    return toReturn;
  } return 0;
}
const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];
module.exports = { calculateEntry, countEntrants };
