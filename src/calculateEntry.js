const data = require('../data/zoo_data');

function criarObjeto(entrants) {
  const objetoFases = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((element) => {
    if (element.age < 18) objetoFases.child += 1;
    else if (element.age >= 18 && element.age < 50) objetoFases.adult += 1;
    else objetoFases.senior += 1;
  });
  return objetoFases;
}

function countEntrants(entrants) {
  // seu código aqui
  if (typeof entrants === 'undefined' || Object.keys(entrants).length === 0) {
    return 0;
  }
  return criarObjeto(entrants);
}

function calculateEntry(entrants) {
  // seu código aqui
  const { prices } = data;
  const objetoPrimeiraF = countEntrants(entrants);
  if (objetoPrimeiraF === 0) {
    return 0;
  }
  const valorTotalC = objetoPrimeiraF.child * prices.child;
  const valorTotalA = objetoPrimeiraF.adult * prices.adult;
  const valorTotalS = objetoPrimeiraF.senior * prices.senior;

  return valorTotalC + valorTotalA + valorTotalS;
}

module.exports = { calculateEntry, countEntrants };
