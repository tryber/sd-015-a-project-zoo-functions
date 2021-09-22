const data = require('../data/zoo_data');

const { species, employees } = data;

const locationAnimals = (animalsResponsible) =>
  species.reduce((locationAnimal, current) => {
    if (animalsResponsible.includes(current.id)) {
      locationAnimal.push(current.location);
    }
    return locationAnimal;
  }, []);

const mapCoverage = () => {
  const createEmployeesMap = employees.map((employee) => ({
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: species.reduce((animalName, currentId) => {
      if (employee.responsibleFor.includes(currentId.id)) {
        animalName.push(currentId.name);
      }
      return animalName;
    }, []),
    locations: locationAnimals(employee.responsibleFor),
  }));
  return createEmployeesMap;
};

function getEmployeesCoverage(obj) {
  if (!obj) return mapCoverage();

  const receiveMap = mapCoverage().find(
    (element) =>
      element.fullName.includes(obj.name) || element.id.includes(obj.id),
  );

  if (!receiveMap) {
    throw new Error('Informações inválidas');
  }
  return receiveMap;
}

module.exports = getEmployeesCoverage;
