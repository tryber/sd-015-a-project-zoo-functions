const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const totalEntrants = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((person) => {
    if (person.age < 18) {
      totalEntrants.child += 1;
    } else if (person.age >= 18 && person.age < 50) {
      totalEntrants.adult += 1;
    } else {
      totalEntrants.senior += 1;
    }
  });
  return totalEntrants;
}
/* Primeiro eu criei um objeto que vai receber o número de visitantes de cada idade.
Com o forEach ditei a condição para incrementar cada tipo de visitante.
Então retornei o objeto atualizado.
*/

function calculateEntry(entrants) {
  if (!entrants || !entrants.length) return 0;

  const { child: allChild, adult: allAdult, senior: allSenior } = countEntrants(entrants);
  const { child: priceChild, adult: priceAdult, senior: priceSenior } = data.prices;
  const revenue = (priceChild * allChild) + (allAdult * priceAdult) + (priceSenior * allSenior);
  return revenue;
}
/* Adicionei uma condição com retorno 0 caso não houvessem visitantes.
Criei um objeto recebido da callback para comparar.
Um outro objeto com os respectivos preços para facilitar a comparação.
Uma constante com o valor calculado.
*/

module.exports = { calculateEntry, countEntrants };
