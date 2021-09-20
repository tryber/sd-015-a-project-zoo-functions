const data = require('../data/zoo_data');

function countAnimals(animal) { // Se não for passado nenhum parametro, retorna a quantidade de todos as species.
  if (!animal) {
    const everySpecie = {};
    data.species.forEach((subject) => { everySpecie[subject.name] = subject.residents.length; });
    return everySpecie;
  }
  const { specie, sex } = animal;
  if (!sex) {
    const typeOfSpecie = data.species.find((subject) => subject.name === specie).residents.length;
    return typeOfSpecie;
  }
  const sexOfSpecie = data.species.find((subject) =>
    subject.name === specie).residents.filter((subject) => subject.sex === sex).length;
  return sexOfSpecie;
}

module.exports = countAnimals;
