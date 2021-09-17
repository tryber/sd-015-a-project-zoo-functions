const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const func = data.employees.find((employee) => employee.id === id);
  const animalsId = func.responsibleFor;
  const animalsArray = data.species.filter((animals) => animalsId.includes(animals.id));
  const sortedArray = animalsArray.map((animal) => animal.residents.sort((a, b) => b.age - a.age));
  return Object.values(sortedArray[0][0]);
}
console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = getOldestFromFirstSpecies;
