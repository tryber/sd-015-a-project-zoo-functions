const data = require('../data/zoo_data');

function countEntrants(entrants) {
  let countChild = 0;
  let countAdult = 0;
  let countSenior = 0;
  entrants.forEach((element) => {
    if (element.age < 18) { countChild += 1; }

    if (element.age >= 18 && element.age < 50) { countAdult += 1; }

    if (element.age >= 50) countSenior += 1;
  });
  // console.log({ child: countChild, adult: countAdult, senior: countSenior });
  return { child: countChild, adult: countAdult, senior: countSenior };
}

function calculateEntry(entrants) {
  if (entrants === undefined) return 0;
  if (entrants.length === undefined) return 0;
  const pessoas = countEntrants(entrants); // Aqui está o pulo do gato. Recebe os valores de pessoas calculado acima.
  const { child, adult, senior } = pessoas;
  const totChild = child * data.prices.child;
  const totAdult = adult * data.prices.adult;
  const totSenior = senior * data.prices.senior;
  const totalEntries = totAdult + totChild + totSenior;
  console.log(totalEntries);
  return totalEntries;
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
