const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return ({
    child: entrants.filter((element) => element.age < 18).length,
    adult: entrants.filter((element) => element.age >= 18 && element.age < 50).length,
    senior: entrants.filter((element) => element.age >= 50).length,
  });
  // estou retornando um obj onde eu filtro o parametro pela idade e pego o length para saber a quantidade
}

function calculateEntry(entrants) {
  // abaxio caso nao haja parametro ou se um objeto vazio for passado
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const people = countEntrants(entrants);
  const { prices } = data;
  // destruturo prices para [pde usar suas informacoes]
  const childrenPrice = people.child * prices.child;
  const adultPrice = people.adult * prices.adult;
  const seniorPrice = people.senior * prices.senior;
  const price = childrenPrice + adultPrice + seniorPrice;
  // calculo o preco individualmente e somo dpois
  return price;
}

module.exports = { calculateEntry, countEntrants };
