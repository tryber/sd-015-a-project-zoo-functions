const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const filteredArr = data.species.find((animalSpecie) => animalSpecie.name.includes(animal));
  return filteredArr.residents.every((aux) => aux.age >= age);
}

module.exports = getAnimalsOlderThan;
// const filteredArr2 = data.species.find((animalSpecie) => animalSpecie.name.includes('lion'));
// console.log(filteredArr2);
console.log(getAnimalsOlderThan('lion', 10));
