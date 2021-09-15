const data = require('../data/zoo_data');

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

// Você deve isolar a parte da lógica na função countEntrants que se encontra no mesmo arquivo da função calculateEntry. Ela deverá receber o array de visitantes e retornar um objeto com a contagem de acordo com os seguintes critérios de classificação:

// Pessoas com idade menor que 18 anos são classificadas como crianças (child);
// Pessoas com idade maior ou igual a 18 anos e menor que 50 são classicadas como adultas (adult);
// Pessoas com idade maior ou igual 50 anos são classificadas como pessoas com mais idade (senior).
// O retorno da função deverá ser um objeto no seguinte formato: { child: 3, adult: 2, senior: 1 }.

function countEntrants(entrants) {
  const under18 = entrants.filter((e) => e.age < 18);
  const above18 = entrants.filter((e) => e.age >= 18 && e.age < 50);
  const aboveOrEqual50 = entrants.filter((e) => e.age >= 50);
  const obj = {
    child: under18.length,
    adult: above18.length,
    senior: aboveOrEqual50.length,
  };
  return obj;
}

// Após terminar a implementação da função countEntrants você deverá utilizá-la para implementar a função calculateEntry. Esta deverá receber um array de visitantes e a partir da quantidade de visitantes e faixa etária de cada um, deverá retornar o valor total a ser cobrado.

const calculateEntry = (parameter) => {
  if (!parameter || Object.keys(parameter).length === 0) return 0;
  const sumOfAllPrices = (data.prices.child * countEntrants(parameter).child)
  + (data.prices.adult * countEntrants(parameter).adult)
  + data.prices.senior * countEntrants(parameter).senior;
  return sumOfAllPrices;
};

calculateEntry(entrants);

countEntrants(entrants);

module.exports = { calculateEntry, countEntrants };
