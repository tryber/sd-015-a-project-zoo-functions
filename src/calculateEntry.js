const data = require('../data/zoo_data');

// const { prices } = data;

function countEntrants(entrants) {
  // seu código aqui
  // return {"adult": 2, "child": 3, "senior": 1};
}

// USADO COMO REFERÊNCIA:
// https://www.samanthaming.com/tidbits/94-how-to-check-if-object-is-empty/
function calculateEntry(entrants) {
  if (typeof entrants === 'undefined' || Object.keys(entrants).length === 0) {
    return 0;
  }
  const tickets = countEntrants(entrants);
  console.log(tickets);
  return tickets;
}

module.exports = { calculateEntry, countEntrants };

/*
6. Implemente a função calculateEntry
Esta função irá receber um array de visitantes no seguinte formato:

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];
Você deve isolar a parte da lógica na função countEntrants que se encontra no mesmo arquivo da função calculateEntry. Ela deverá receber o array de visitantes e retornar um objeto com a contagem de acordo com os seguintes critérios de classificação:

Pessoas com idade menor que 18 anos são classificadas como crianças (child);
Pessoas com idade maior ou igual a 18 anos e menor que 50 são classicadas como adultas (adult);
Pessoas com idade maior ou igual 50 anos são classificadas como pessoas com mais idade (senior).
O retorno da função deverá ser um objeto no seguinte formato: { child: 3, adult: 2, senior: 1 }.

Exemplo de uso da função countEntrants:

countEntrants(entrants);
Saída:

{ "child": 3, "adult": 2, "senior": 1 }
Após terminar a implementação da função countEntrants você deverá utilizá-la para implementar a função calculateEntry. Esta deverá receber um array de visitantes e a partir da quantidade de visitantes e faixa etária de cada um, deverá retornar o valor total a ser cobrado.

Exemplo de uso da função calculateEntry:

calculateEntry(entrants);
Saída:

187.94
Observações técnicas

Ambas funções recebem como parâmetro um array contendo objetos que representam pessoas.
O que será avaliado

Ao receber um array de visitantes, retorna um objeto com a contagem;
Retorna 0 se nenhum argumento for passado;
Retorna 0 se um objeto vazio for passado;
Retorna o preço total a ser cobrado dado o array de pessoas.
*/
