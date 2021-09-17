const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const total = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((pessoa) => {
    if (pessoa.age < 18) {
      total.child += 1;
    } else if (pessoa.age > 49) {
      total.senior += 1;
    } else total.adult += 1;
  });
  return total;
}

function calculateEntry(entrants) {
  if (entrants === undefined || JSON.stringify(entrants) === JSON.stringify({})) {
    return 0;
  }

  const totalPessoas = countEntrants(entrants);
  return totalPessoas.adult * 49.99 + totalPessoas.senior * 24.99 + totalPessoas.child * 20.99;
}

module.exports = { calculateEntry, countEntrants };
