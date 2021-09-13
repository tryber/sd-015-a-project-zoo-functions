const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(obj) {
  // seu código aqui
  const everySpecie = {};
  const gender = {};
  species.forEach((specie) => {
    const { name, residents } = specie;
    if (obj) gender[name] = residents.filter((resident) => resident.sex === obj.gender).length;
    everySpecie[name] = residents.length;
  });

  if (!obj) {
    return everySpecie;
  } if (obj.gender) {
    return gender[obj.specie];
  } return everySpecie[obj.specie];
}

console.log(countAnimals({ specie: 'penguins', gender: 'female' }));
module.exports = countAnimals;
