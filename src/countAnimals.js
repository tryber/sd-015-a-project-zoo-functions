const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const obj = {};
    data.species.forEach((element) => {
      obj[element.name] = element.residents.length;
    });
    return obj;
  }

  if (animal === { species: 'penguins' }) {
    species.name.map((elem) => elem.residents.length);
  }
  return { species };
}

console.log(countAnimals());

module.exports = countAnimals;
