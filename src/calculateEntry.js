const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');
// fiz a requisição do array prices localizado no documento data_zoo.js

const countEntrants = (entrants) => ({
  child: entrants.filter((find) => find.age < 18).length,
  adult: entrants.filter((find) => find.age >= 18 && find.age < 50).length,
  senior: entrants.filter((find) => find.age >= 50).length,
});
// criei uma variável para cada faixa etária e ultilizei o filter() para gerar um array com todos que se encontram dentro da idade especificada e o length() para contar a quantidade de pessoas dentro de cada array.

const calculateEntry = (entrants) => {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  return (countEntrants(entrants)
    .child * prices.child) + (countEntrants(entrants)
    .adult * prices.adult) + (countEntrants(entrants)
    .senior * prices.senior);
};
// ultilizei os valores de cada entrada designados no array prices[] para multiplicar pela quantidade de pessoas por cada faixa etária e somei todos os resultados no return

module.exports = { calculateEntry, countEntrants };
