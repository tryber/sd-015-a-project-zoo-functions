const data = require('../data/zoo_data');
// Esta função irá receber um array de visitantes
function countEntrants(entrants) {
  // seu código aqui
  const visitantes = { child: 0, adult: 0, senior: 0 };
  // percorre o array dos visitantes
  entrants.forEach((visitante) => {
    if (visitante.age < 18) {
      visitantes.child += 1;
    } else if (visitante.age >= 18 && visitante.age < 50) {
      visitantes.adult += 1;
    } else {
      visitantes.senior += 1;
    }
  });
  return visitantes;
}

// Após terminar a implementação da função countEntrants você deverá utilizá-la para implementar a função calculateEntry. Esta deverá receber um array de visitantese a partir da quantidade de visitantes e faixa etária de cada um,deverá retornar o valor total a ser cobrado.
function calculateEntry(entrants) {
  // seu código aqui
  let total = 0;
  // Se os visitantes serem indefinidos ou o valor for igual a zero ele retorna o total
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return total;
  }
  const visitantesPorIdade = countEntrants(entrants);
  total = visitantesPorIdade.adult * data.prices.adult
  + visitantesPorIdade.child * data.prices.child
  + visitantesPorIdade.senior * data.prices.senior;
  return total;
}

module.exports = { calculateEntry, countEntrants };
