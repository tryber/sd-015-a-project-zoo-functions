const data = require('../data/zoo_data');

// function countEntrants(entrants) {
//   let child = 0;
//   let adult = 0;
//   let senior = 0;

//   for (let index = 0; index < entrants.length; index += 1) {
//     if (arguments.length === 0 || arguments[0] === {}) {
//       return 0;
//     }

//     if (entrants[index].age < 18) {
//       child += 1;
//     } else if (entrants[index].age >= 18 && entrants[index].age < 50) {
//       adult += 1;
//     } else {
//       senior += 1;
//     }
//   }

//   return (`{ "child": ${child}, "adult": ${adult}, "senior": ${senior} }`);
// }

function calculateEntry(entrants) {

}

module.exports = { calculateEntry, countEntrants };

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

console.log(countEntrants({}));