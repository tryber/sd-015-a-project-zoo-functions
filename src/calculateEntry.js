const data = require('../data/zoo_data');

// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

// Function to separate entrants by age
function countEntrants(entrants) {
  const child = entrants.filter(({ age }) => age < 18).length;
  const adult = entrants.filter(({ age }) => age >= 18 && age < 50).length;
  const senior = entrants.filter(({ age }) => age >= 50).length;
  return { child, adult, senior };
}

// Function to calculate the final amount (money) of a group of entrants
function calculateEntry(entrants) {
  if (!entrants || !entrants.length) return 0;

  let { child, adult, senior } = countEntrants(entrants);
  const { prices } = data;
  child *= prices.child;
  adult *= prices.adult;
  senior *= prices.senior;
  const amount = child + adult + senior;

  return amount;
}

// calculateEntry(entrants);
module.exports = { calculateEntry, countEntrants };
