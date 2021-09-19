const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    return species.reduce((acc, current) => {
      acc[current.name] = current.residents.length;
      return acc;
    }, {});
  } if (!animal.sex) {
    const { residents } = species.find((specie) => specie.name === animal.specie);
    return residents.length;
  } if (animal.specie && animal.sex) {
    const findAnimals = species.find(
      (value) => value.name === animal.specie,
    ).residents;
    const findAnimalsGender = findAnimals.filter(
      (value) => value.sex === animal.sex,
    );
    return findAnimalsGender.length;
  }
}

// Referência correçoes na função: [Cassia Elen] https://github.com/tryber/sd-015-a-project-zoo-functions/pull/105/commits/e4ad02e58127e70b981fba23a717db7f016e6fc0

module.exports = countAnimals;
