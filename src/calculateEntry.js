const data = require('../data/zoo_data');

function countChild(entrants) {
  return entrants.reduce((count, entrant) => {
    let cC = count;
    if (entrant.age < 18) {
      cC += 1;
    }
    return cC;
  }, 0);
}

function countAdult(entrants) {
  return entrants.reduce((count, entrant) => {
    let cA = count;
    if (entrant.age >= 18 && entrant.age < 50) {
      cA += 1;
    }
    return cA;
  }, 0);
}

function countSenior(entrants) {
  return entrants.reduce((count, entrant) => {
    let cS = count;
    if (entrant.age >= 50) {
      cS += 1;
    }
    return cS;
  }, 0);
}

function countEntrants(entrants) {
  return {
    child: countChild(entrants),
    adult: countAdult(entrants),
    senior: countSenior(entrants),
  };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const nPeople = countEntrants(entrants);
  return nPeople.child * 20.99 + nPeople.adult * 49.99 + nPeople.senior * 24.99;
}

module.exports = { calculateEntry, countEntrants };

//! Deletar Abaixo

// Implemente a função calculateEntry
// Esta função irá receber um array de visitantes no seguinte formato:

// const entrants = [
//   { name: "Lara Carvalho", age: 5 },
//   { name: "Frederico Moreira", age: 5 },
//   { name: "Pedro Henrique Carvalho", age: 5 },
//   { name: "Maria Costa", age: 18 },
//   { name: "Núbia Souza", age: 18 },
//   { name: "Carlos Nogueira", age: 50 },
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

// countEntrants(entrants);
// calculateEntry();
// calculateEntry({});
// calculateEntry(entrants);
