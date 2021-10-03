const data = require('../data/zoo_data');

// 6. Implemente a função calculateEntry
// Esta função irá receber um array de visitantes no seguinte formato:

// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

// Você deve isolar a parte da lógica na função countEntrants que se encontra no mesmo arquivo da função calculateEntry. Ela deverá receber o array de visitantes e retornar um objeto com a contagem de acordo com os seguintes critérios de classificação:

// Pessoas com idade menor que 18 anos são classificadas como crianças (child);
// Pessoas com idade maior ou igual a 18 anos e menor que 50 são classicadas como adultas (adult);
// Pessoas com idade maior ou igual 50 anos são classificadas como pessoas com mais idade (senior).
// O retorno da função deverá ser um objeto no seguinte formato: { child: 3, adult: 2, senior: 1 }.

// Exemplo de uso da função countEntrants:

// countEntrants(entrants);
// Saída:

// { "child": 3, "adult": 2, "senior": 1 }
// Após terminar a implementação da função countEntrants você deverá utilizá-la para implementar a função calculateEntry. Esta deverá receber um array de visitantes e a partir da quantidade de visitantes e faixa etária de cada um, deverá retornar o valor total a ser cobrado.

// Exemplo de uso da função calculateEntry:

// calculateEntry(entrants);
// Saída:

// 187.94
// Observações técnicas

// Ambas funções recebem como parâmetro um array contendo objetos que representam pessoas.
// O que será avaliado

// Ao receber um array de visitantes, retorna um objeto com a contagem;
// Retorna 0 se nenhum argumento for passado;
// Retorna 0 se um objeto vazio for passado;
// Retorna o preço total a ser cobrado dado o array de pessoas.

function countEntrants(entrants) {
  const classificatedEntrants = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      classificatedEntrants.child += 1;
    }
    if (entrant.age >= 18 && entrant.age < 50) {
      classificatedEntrants.adult += 1;
    }
    if (entrant.age >= 50) {
      classificatedEntrants.senior += 1;
    }
  });
  return classificatedEntrants;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const classificatedEntrants = countEntrants(entrants);
  const totalChild = classificatedEntrants.child * data.prices.child;
  const totalAdult = classificatedEntrants.adult * data.prices.adult;
  const totalSenior = classificatedEntrants.senior * data.prices.senior;
  return totalChild + totalAdult + totalSenior;
}

module.exports = { calculateEntry, countEntrants };
