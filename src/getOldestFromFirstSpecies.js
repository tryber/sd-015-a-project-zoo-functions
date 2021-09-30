const data = require('../data/zoo_data');

function getOldestAnimal(specieResidents) {
  let oldestAnimalAge = 0;
  let oldestAnimal;
  specieResidents.forEach((specie) => {
    if (specie.age > oldestAnimalAge) {
      oldestAnimalAge = specie.age;
      oldestAnimal = specie;
    }
  })
  return oldestAnimal;
}
function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employee = data.employees.find((employeeData) => employeeData.id === id);
  const firstSpecieId = employee.responsibleFor[0];
  const firstSpecieResidents = data.species.find(
    (specie) => specie.id === firstSpecieId,
  ).residents;
  const oldestAnimal = getOldestAnimal(firstSpecieResidents);
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

module.exports = getOldestFromFirstSpecies;
