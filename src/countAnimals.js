const data = require('../data/zoo_data');

function countAnimals(animal) {
  //  não recebe argumento
  if (animal === undefined) {
    const obj = {};
    data.species.forEach((specie) => { obj[specie.name] = specie.residents.length; });
    return obj;
  }
  //  object destructuring - consultado no material do course
  const { specie, sex } = animal;
  const getSpecie = data.species.find((addSpecie) => addSpecie.name === specie);
  const getGender = getSpecie.residents.filter((addGender) => addGender.sex === sex);

  //  recebe dois argumentos
  if (specie && sex) {
    return getGender.length;
  }
  //  recebe um argumento
  return getSpecie.residents.length;
}

module.exports = countAnimals;
