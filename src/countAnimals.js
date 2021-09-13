const data = require('../data/zoo_data');

function countAnimals(animal = undefined) {
  // seu código aqui
  const count = {};
  data.species.forEach((eachEspecie) => {
    count[eachEspecie.name] = eachEspecie.residents.length;
  });
  if (!animal) {
    return count;
  }
  const { specie, gender } = animal;
  return (!gender) ? count[specie] : data.species.find((elem) =>
    elem.name === specie).residents.filter((resident) =>
    resident.sex === gender).reduce(((acc, number) => acc + 1), 0);
}

module.exports = countAnimals;
