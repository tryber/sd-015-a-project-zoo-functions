const {
  prices,
} = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // Filtrando a quantidade de cada tipo
  const children = entrants.filter((yo) => yo.age < 18);
  const adults = entrants.filter((yo) => yo.age >= 18 && yo.age < 50);
  const seniors = entrants.filter((yo) => yo.age >= 50);

  // Cria um objeto com a quantidade de cada tipo
  const objectEntrants = {
    child: children.length,
    adult: adults.length,
    senior: seniors.length,
  };
  return objectEntrants;
}

function calculateEntry(entrants) {
  // Caso não exista um parametro, retorna 0
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;

  // Chama a função countEntrants para contar a quantidade de cada tipo e multiplica pelo objeto prices respectivo
  const priceChildren = (countEntrants(entrants).child * prices.child);
  const priceAdults = (countEntrants(entrants).adult * prices.adult);
  const priceSeniors = (countEntrants(entrants).senior * prices.senior);

  return priceChildren + priceAdults + priceSeniors;
}

module.exports = {
  calculateEntry,
  countEntrants,
};
