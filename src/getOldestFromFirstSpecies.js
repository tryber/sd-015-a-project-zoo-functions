const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const worker = employees.find((workerM) => workerM.id === id).responsibleFor;
  const beast = species.find((anim) => anim.id === worker[0]).residents;
  const oldBeast = beast.reduce((accumulator, curentValue) =>
    ((accumulator.age > curentValue.age) ? accumulator : curentValue));
  return Object.values(oldBeast);
}

module.exports = getOldestFromFirstSpecies;
// para formular a linha 9 esse site me ajudou https://ichi.pro/pt/o-que-faz-o-ponto-de-interrogacao-significa-no-codigo-javascript-58536023095136
// e este tbm https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce //
// na linha 6 acho o funcionario e na linha 7 identifico o primeiro animal, linha 8 e 9 compararo idades, linha 10 basicamente mostro o que a funçao pediu//
