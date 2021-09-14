const data = require('../data/zoo_data');

// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

function countEntrants(entrantsCounter) {
  // console.log(entrantsCounter);
  if (!entrantsCounter || !entrantsCounter.length) {
    return 0;
  }
  const child = entrantsCounter.filter((elem) => elem.age < 18).length;
  const adult = entrantsCounter.filter(
    (elem2) => elem2.age >= 18 && elem2.age < 50,
  ).length;
  const senior = entrantsCounter.filter((elem3) => elem3.age >= 50).length;
  return {
    child,
    adult,
    senior,
  };
}

function calculateEntry(entrantsValues) {
  if (!entrantsValues || !entrantsValues.length) {
    return 0;
  }
  const entries = countEntrants(entrantsValues);
  const { child, adult, senior } = entries;
  return child * 20.99 + adult * 49.99 + senior * 24.99;
  // .map(
  //   (elem) => elem.child * 20.99 + elem.adult * 49.99 + elem.senior * 24.99,
  // );
}

const objss = {};
// console.log(objss)

// console.log(countEntrants(entrants));
// console.log(countEntrants());
// console.log(calculateEntry(entrants));
console.log(calculateEntry(objss));
// console.log(calculateEntry());

module.exports = { calculateEntry, countEntrants };

// 6. Implemente a função calculateEntry
// Esta função irá receber um array de visitantes no seguinte formato:

// Você deve isolar a parte da lógica na função countEntrants que se encontra no mesmo arquivo da função calculateEntry. Ela deverá receber o array de visitantes e retornar um objeto com a contagem de acordo com os seguintes critérios de classificação:

// Pessoas com idade menor que 18 anos são classificadas como crianças (child);
// Pessoas com idade maior ou igual a 18 anos e menor que 50 são classicadas como adultas (adult);
// Pessoas com idade maior ou igual 50 anos são classificadas como pessoas com mais idade (senior).
// O retorno da função deverá ser um objeto no seguinte formato: { child: 3, adult: 2, senior: 1 }.
