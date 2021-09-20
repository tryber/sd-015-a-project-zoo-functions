const data = require('../data/zoo_data');

// jcassanji repositório consultado: https://github.com/tryber/sd-015-a-project-zoo-functions/blob/659e8f2477ef67c515abd0f46de71e599afc83ff/src/calculateEntry.js

const entrantsList = { // objeto com tres propriedades com valor zero.
  child: 0,
  adult: 0,
  senior: 0,
};

let totalValue = 0; // variavel com valor zero.

function NewEntrants() { // função que acessa as propriedades do objeto no topo do código e coloca seus valores como 0.
  entrantsList.child = 0;
  entrantsList.adult = 0;
  entrantsList.senior = 0;
}

function insertInEntrantList(element) { // element é cada objeto da const entrants
  if (element.age < 18) { // se a propriedade age for menor que 18
    entrantsList.child += 1; // a propriedade child vai ter um incremento
  } else if (element.age >= 18 && element.age < 50) { // se a propriedade age for maior ou igual a 18 e menor que 50
    entrantsList.adult += 1; // a propriedade adult vai receber um incremento
  } else {
    entrantsList.senior += 1; // caso contrário a propriedade senior recebera um incremento
  }
}

function countEntrants(entrants) { // recebe como parametro a const entrants.
  NewEntrants(); // os valores do objeto entrantsList são reiniciados
  entrants.forEach((e) => insertInEntrantList(e)); // forEach aplicará para cada objeto da const entrants a função "(e) => insertInEntrantList(e)"
  return entrantsList; // retorna entrantsList.
}

function refreshTotalValue() {
  const childCount = entrantsList.child; // atribuido a variavel a propriedade child do objeto entrantsList
  const adultCount = entrantsList.adult;
  const seniorCount = entrantsList.senior;
  const childPrice = 20.99; // atribui a variavel o valor de 20,99
  const adultPrice = 49.99;
  const seniorPrice = 24.99;
  totalValue = (childCount * childPrice) + (adultCount * adultPrice) + (seniorCount * seniorPrice); // totalVlue é igual a childCount vezes  childPrice mais adultCount vezes adultPrice mais seniorCount vezes seniorPrice
  return totalValue; // retorna esse valor
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) { // se não houver parametro ou se o objeto estiver vazio, retorna 0.
    return 0;
  }
  countEntrants(entrants);
  return refreshTotalValue(); // se não for a hipótese de cima retorna a função refresh.
}

module.exports = { calculateEntry, countEntrants };
