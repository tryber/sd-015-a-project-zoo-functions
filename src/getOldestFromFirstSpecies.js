const data = require('../data/zoo_data');

function getOldestAnimal(specieResidents) {
  let oldestAnimalAge = 0;
  let oldestAnimal;
  for (let i = 0; i < specieResidents.length; i += 1) {
    if (specieResidents[i].age > oldestAnimalAge) {
      oldestAnimalAge = specieResidents[i].age;
      oldestAnimal = specieResidents[i];
    }
  }
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
