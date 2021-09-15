const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const animalByemployee = employees.find((employee) => employee.id === id).responsibleFor[0];
  const getResidents = species.filter((specie) => specie.id === animalByemployee)[0].residents;
  const sortResidents = getResidents.sort((a, b) => {
    if (a.age > b.age) {
      return -1;
    }
    if (a.age < b.age) {
      return 1;
    }
    return 0;
  });
  const getOldestAnimal = Object.values(sortResidents[0]);

  return getOldestAnimal;
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
