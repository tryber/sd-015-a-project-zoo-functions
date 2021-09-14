const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const child = entrants.filter((children) => children.age < 18).length;
  const adult = entrants.filter((adults) => adults.age >= 18 && adults.age < 50).length;
  const senior = entrants.filter((seniors) => seniors.age >= 50).length;
  const visitants = { child, adult, senior };
  return visitants;
  // console.log(visitants);
}

function calculateEntry(entrants) {
  // seu código aqui
  // ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const amountVisitants = countEntrants(entrants);
  const chidrenPrice = amountVisitants.child * data.prices.child;
  const adultsPrice = amountVisitants.adult * data.prices.adult;
  const seniorsPrice = amountVisitants.senior * data.prices.senior;
  const total = chidrenPrice + adultsPrice + seniorsPrice;
  return total;
}

module.exports = { calculateEntry, countEntrants };
