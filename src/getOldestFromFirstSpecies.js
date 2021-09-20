const data = require('../data/zoo_data');

const aniPath = data.species;
const empPath = data.employees;

function getOldestFromFirstSpecies(id) {
  const mtArray = [];
  const findEmplo = empPath.find((el) => el.id === id);
  const firstAnimal = findEmplo.responsibleFor[0];
  const findAnimal = aniPath.find((el) => el.id === firstAnimal);
  const sortAnimal = findAnimal.residents.sort((a, b) => b.age - a.age);
  const old = sortAnimal[0];
  mtArray.push(old.name, old.sex, old.age);
  return mtArray;
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
