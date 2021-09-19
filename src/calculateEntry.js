const data = require('../data/zoo_data');

// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

function countEntrants(entrants) {
  // seu código aqui
  const visitantes = {
    child: entrants.filter((element) => element.age < 18).length,
    adult: entrants.filter((element) => element.age > 17 && element.age < 50).length,
    senior: entrants.filter((element) => element.age > 49).length,
  };
  return visitantes;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined) return 0; // se entrants der undefined quer dizer q ele está vazio
  if (Object.entries(entrants).length === 0) return 0; // se o tamanho das chave/valor de entrants der 0 quer dizer q ele está vazio

  const precoChild = countEntrants(entrants).child * data.prices.child; // prego a quantidade de todas as crianças na função countEntrants e multiplico pelo preço do ingresso
  const precoAdult = countEntrants(entrants).adult * data.prices.adult;
  const precoSenior = countEntrants(entrants).senior * data.prices.senior;
  return precoChild + precoAdult + precoSenior; // somo o preço de todas as pessoas
}
// console.log(calculateEntry(entrants));
module.exports = { calculateEntry, countEntrants };
