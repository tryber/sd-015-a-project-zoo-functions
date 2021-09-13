const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // const age = {};
  // entrants.map((entrant) => {
  //   if (entrant.age < 18) {
  //     age['child'] = entrant.age;
  //   } else if (entrant.age < 50) {
  //     age['adult'] = entrant.age;
  //   } else {
  //     age['senior'] = entrant.age;
  //   }
  // });

  // return age;
}

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

console.log(countEntrants(entrants));

function calculateEntry(entrantx) {
  // seu código aqui
}

module.exports = { calculateEntry, countEntrants };
