const data = require('../data/zoo_data');

function counter(entrants) { // Tal callback contará o número de 'entrants', baseando-se na idade.
  const countEntrantsObj = { child: 0, adult: 0, senior: 0 };

  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      countEntrantsObj.child += 1;
    } if (entrant.age >= 18 && entrant.age < 50) {
      countEntrantsObj.adult += 1;
    } if (entrant.age >= 50) {
      countEntrantsObj.senior += 1;
    }
  });
  return countEntrantsObj;
} // Retorna um objeto no padrão { child: N°, adult: N°, senior: N° }

function countEntrants(entrants = {}) { // Tal callback filtra se 'entrants' foi imputado no padrão correto.
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  return counter(entrants);
}

function calculateEntry(entrants) {
  if (countEntrants(entrants) === 0) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  return child * data.prices.child + adult * data.prices.adult + senior * data.prices.senior;
}

module.exports = { calculateEntry, countEntrants };
