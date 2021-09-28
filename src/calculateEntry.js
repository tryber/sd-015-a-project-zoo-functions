const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const child = entrants.filter((elemento) => elemento.age < 18);
  // console.log(child);
  const adult = entrants.filter((element) => element.age >= 18 && element.age < 50);
  // console.log(adult);
  const senior = entrants.filter((elemento) => elemento.age >= 50);
  // console.log(senior);
  return { child: child.length, adult: adult.length, senior: senior.length };
}
function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }

  const visitants = countEntrants(entrants);
  const child = visitants.child * prices.child;
  const adult = visitants.adult * prices.adult;
  const senior = visitants.senior * prices.senior;
  const soma = child + adult + senior;
  return soma;
}

module.exports = { calculateEntry, countEntrants };
