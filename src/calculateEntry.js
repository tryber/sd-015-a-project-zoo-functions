const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  return { // retorna um objeto que ele pede
    child: entrants.filter((entrant) => entrant.age < 18).length, // aqui filtra a idade das pessoas
    adult: entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length,
    senior: entrants.filter((entrant) => entrant.age >= 50).length,
  };
}

function calculateEntry(entrants) {
  // aqui é uma validação
  // se não tiver parametro ou se o objeto for vazio retornará 0.
  if (!entrants || Object.values(entrants).length === 0) {
    return 0;
  }
  const people = countEntrants(entrants); // função da linha 4.
  const child = people.child * prices.child;
  // aqui faz faz um calculo com a quantidade de pessoas e o preço de cada pessoa
  const adult = people.adult * prices.adult;
  const senior = people.senior * prices.senior;
  const totalPrice = child + adult + senior;
  return totalPrice; // retorna o preço total.
}

module.exports = { calculateEntry, countEntrants };
