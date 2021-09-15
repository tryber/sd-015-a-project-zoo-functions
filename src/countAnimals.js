const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(obj) {
  // seu código aqui
  const everySpecie = {};
  const sex = {};
  species.forEach((specie) => {
    const { name, residents } = specie;
    if (obj) sex[name] = residents.filter((resident) => resident.sex === obj.sex).length;
    everySpecie[name] = residents.length;
  });

  if (!obj) {
    return everySpecie;
  } if (obj.sex) {
    return sex[obj.specie];
  } return everySpecie[obj.specie];
}

module.exports = countAnimals;
