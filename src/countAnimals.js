const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    return species.map((element) => ({ [element.name]: element.residents.length,
    }));
  }
}

module.exports = countAnimals;
