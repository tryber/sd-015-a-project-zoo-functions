const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function locationAndNamesAnimals(idAnimaisValidos) {
  // id animal
  return species.reduce((listNames, animal) => {
    if (idAnimaisValidos.includes(animal.id)) {
      listNames.listAnimals.push(animal.name);
      listNames.listLocationAnimal.push(animal.location);
    }
    return listNames;
  }, { listAnimals: [], listLocationAnimal: [] });
}

function employeesDates() {
  return employees.reduce((listOfEmployees, employee) => {
    const listAnimals = locationAndNamesAnimals(employee.responsibleFor);
    const dadosFuncionario = {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: listAnimals.listAnimals,
      locations: listAnimals.listLocationAnimal,
    };
    const list = [...listOfEmployees, dadosFuncionario];
    return list;
  }, []);
}
console.log(employeesDates());

function getEmployeesCoverage(information) {
  if (!information) {
    return employeesDates();
  }
  const { id, name } = information;
  if (employeesDates().find((employee) => employee.id === id)) {
    return employeesDates().find((employee) => employee.id === id);
  }
  if (employeesDates().find((employee) => employee.fullName.includes(name))) {
    return employeesDates().find((employee) => employee.fullName.includes(name));
  }
}

module.exports = getEmployeesCoverage;
