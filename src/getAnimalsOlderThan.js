const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  // const filterAnimal = species.find((elemento) => elemento.name === animal);
  // return filterAnimal.residents.every((residente) => residente.age > age);
  const filter = data.species.find((element) => element.name === animal);

  let fill = (resident) => {
    return resident.age >= age
  }
  return filter.residents.every(fill)
};

module.exports = getAnimalsOlderThan;
