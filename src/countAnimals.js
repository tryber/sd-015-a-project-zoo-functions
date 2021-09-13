const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  const allAnimals = {};
  if (animal === undefined) {
    species.forEach((element) =>  allAnimals[element.name] = element.residents.length); 
}
return allAnimals;
}

module.exports = countAnimals;
