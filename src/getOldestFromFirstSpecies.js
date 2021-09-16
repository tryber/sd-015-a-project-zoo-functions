const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const infoEmployees = employees.find((employe) => employe.id === id);
  const animals = species.find((creature) => creature.id
    === infoEmployees.responsibleFor[0]).residents;
  const infoAnimal = animals.reduce((older, now) => ((now.age > older.age) ? now : older));
  return [infoAnimal.name, infoAnimal.sex, infoAnimal.age];
}

module.exports = getOldestFromFirstSpecies;
