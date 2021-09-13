const data = require('../data/zoo_data');

function countEntrants(entrants) {
  if (typeof entrants === 'undefined' || Object.keys(entrants).length === 0) {
    return 0;
    // Retorna 0 se nenhum argumento for passado;
    // Retorna 0 se um objeto vazio for passado;
  }
  // O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
  const ages = entrants.map((elem) => elem.age);
  // age é um array com todas as idades
  // console.log(ages);

  // O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
  // retorna um objeto no seguinte formato: { child: 3, adult: 2, senior: 1 }. .length é o tamanho do array que satisfaz o teste.
  return ({
    child: ages.filter((child) => child < 18).length,
    adult: ages.filter((adult) => adult >= 18 && adult < 50).length,
    senior: ages.filter((senior) => senior >= 50).length,
  });
}

// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

// console.log(countEntrants(entrants));

function calculateEntry(entrants) {
  const obj = countEntrants(entrants);
  // console.log(Object.keys(obj));
  return Object.keys(obj)
    .reduce(((acc, current) => acc + obj[current] * data.prices[current]), 0);
}

// console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };
