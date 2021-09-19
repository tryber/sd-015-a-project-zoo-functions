const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return {
    child: entrants.filter((elemento) => elemento.age < 18).length,
    adult: entrants.filter((elemento) => elemento.age >= 18 && elemento.age < 50).length,
    senior: entrants.filter((elemento) => elemento.age >= 50).length,
  };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  } const persons = countEntrants(entrants);
  const soma = (persons.child * data.prices.child)
  + (persons.adult * data.prices.adult) + (persons.senior * data.prices.senior);
  return soma;
}

module.exports = { calculateEntry, countEntrants };
