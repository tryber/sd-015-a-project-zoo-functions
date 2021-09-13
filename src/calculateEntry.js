const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants1) {
  const pessoas = {
    child: entrants1.filter((element) => element.age < 18).length,
    adult: entrants1.filter((element) => element.age >= 18 && element.age < 50).length,
    senior: entrants1.filter((element) => element.age >= 50).length,
  };
  return pessoas;
}

function calculateEntry(entrants1) {
  if (entrants1 === undefined || Object.entries(entrants1).length === 0) {
    return 0;
  }
  const valores = Object.entries(countEntrants(entrants1));
  console.log(valores);
  const precos = valores.reduce((result, element) => result + prices[element[0]] * element[1], 0);
  return precos;
}
// console.log(calculateEntry(entrants));
module.exports = { calculateEntry, countEntrants };
