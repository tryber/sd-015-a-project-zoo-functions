const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  const geral = {};
  if (!animal) {
    data.species.forEach(({ name, residents }) => geral[name] = residents.length);
    return geral;
  }

  const { specie, gender } = animal;
  if (!gender) {
    const { residents } = data.species.find(({ name }) => name === specie);
    return residents.length;
  }
  const { residents } = data.species.find(({ name }) => name === specie);
  const residentsByGenre = residents.filter(({ sex }) => sex === gender);
  return residentsByGenre.length;
}

module.exports = countAnimals;
