const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const testes = (entrants) => (entrants && Array.isArray(entrants));

// function countEntrants(entrants) {
//   // seu código aqui
//   let child = 0;
//   let adult = 0;
//   let senior = 0;
//   if (testes(entrants)) {
//     entrants.filter((entrant) => {
//       if (entrant.age < 18) {
//         child += 1;
//       }
//       else if (entrant.age < 50) {
//         adult += 1;
//       } else {
//         senior += 1;
//       } return null;
//     });
//   }
//   return { child, adult, senior };
// } DEIXEI ESSE CÓDIGO AQUI POIS FOI COMO PENSEI PRIMEIRO. MAS O LINT NAO GOSTOU XD

function countEntrants(entrants) {
  // seu código aqui
  let child = 0;
  let adult = 0;
  let senior = 0;
  if (testes(entrants)) {
    const childArray = entrants.filter((entrant) => entrant.age < 18);
    const adultArray = entrants.filter((entrant) => entrant.age < 50 && entrant.age >= 18);
    const seniorArray = entrants.filter((entrant) => entrant.age >= 50);
    child += childArray.length;
    adult += adultArray.length;
    senior += seniorArray.length;
  }
  return { child, adult, senior };
  // CÓDIGO CORRIGIDO, LINT APPROVES
}

const entrants1 = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function calculateEntry(entrants) {
  // seu código aqui
  const entrantsArray = countEntrants(entrants);
  const { adult, senior, child } = prices;
  return entrantsArray.child * child + entrantsArray.senior * senior + entrantsArray.adult * adult;
}

console.log(calculateEntry(entrants1));

module.exports = { calculateEntry, countEntrants };
