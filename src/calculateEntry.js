const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const saida = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  function cadaUm(pessoa) {
    if (pessoa.age < 18) {
      saida.child += 1;
    } else if (pessoa.age >= 50) {
      saida.senior += 1;
    } else {
      saida.adult += 1;
    }
    return saida;
  }
  entrants.forEach(cadaUm);
  return saida;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const entradas = countEntrants(entrants);
  const valores = data.prices;
  let valorFinal = 0;
  Object.keys(valores).forEach((key) => {
    valorFinal += valores[key] * entradas[key];
  });
  // for (const key in entradas) {
  //   valorFinal += valores[key] * entradas[key];
  // }
  return valorFinal;
}

module.exports = { calculateEntry, countEntrants };
