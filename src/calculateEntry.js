// const en = require('faker/lib/locales/en');
const data = require('../data/zoo_data');

const { prices } = data;
const kid = prices.child;
const major = prices.adult;
const elder = prices.senior;

function countEntrants(visitors = '') {
  if (!visitors) {
    return {};
  }
  const child = visitors.filter((element) => element.age < 18).length;
  const adult = visitors.filter((element) => element.age >= 18 && element.age < 50).length;
  const senior = visitors.filter((element) => element.age >= 50).length;
  const visitorsAge = { child, adult, senior };
  return visitorsAge;
}

function calculateEntry(visitors = '') {
  if (Object.values(visitors).length < 1) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(visitors);
  return ((child * kid) + (adult * major) + (senior * elder));
}

module.exports = { calculateEntry, countEntrants };
// Referências: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/values
// Vi que Object.values retorna um array; então tratei para um caso que venha vazio.Depois removi o (!visitors) em calculateEntry, pois fiz alguns testes e não foi necessário para o funcionamento do código até onde testei. ex: (NaN, undefined, '', 0)
