const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');
// Função que categoriza cada pessoa em uma das três catergorias de visitantes:
function countEntrants(entrants) {
  // Se nenhum valor foi passado como parametro ou um objeto vazio:
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  // Pega apenas o valor da idade de cada visitante:
  const ageCheck = entrants.map((person) => person.age);
  const finalObject = {};
  // Object destructuring para diminuir o codigo:
  let { child, adult, senior } = finalObject;
  child = ageCheck.filter((age) => age < 18).length;
  adult = ageCheck.filter((age) => age >= 18 && age < 50).length;
  senior = ageCheck.filter((age) => age >= 50).length;
  return { child, adult, senior };
}
// Função para calcular o valor maximo da entrada de visitantes:
function calculateEntry(entrants) {
  // Se nenhum valor foi passado como parametro ou um objeto vazio:
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const results = countEntrants(entrants);
  const { child, adult, senior } = results;
  return child * prices.child + adult * prices.adult + senior * prices.senior;
}

module.exports = { calculateEntry, countEntrants };
