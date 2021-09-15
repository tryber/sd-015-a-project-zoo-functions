const data = require('../data/zoo_data');
// const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((item) => item.age < 18);
  const adult = entrants.filter((item) => item.age >= 18 && item.age < 50);
  const senior = entrants.filter((item) => item.age >= 50);
  return {
    child: child.length,
    adult: adult.length,
    senior: senior.length,
  };
}

function calculateEntry(entrants) {
  if (!entrants) {
    return 0;
  }
  const obtjetoVazio = Object.keys(entrants).length;
  if (obtjetoVazio === 0) {
    return 0;
  }
  const totalPessoas = countEntrants(entrants);
  const valorTotalChild = totalPessoas.child * 20.99;
  const valorTotalAdult = totalPessoas.adult * 49.99;
  const valortotalSenior = totalPessoas.senior * 24.99;
  const total = valorTotalChild + valorTotalAdult + valortotalSenior;
  return total;
}

module.exports = { calculateEntry, countEntrants };
