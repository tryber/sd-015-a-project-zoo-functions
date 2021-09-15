const data = require('../data/zoo_data');

const { species, employees } = data;

function undefinedEmployee(employee) {
  const arrayAll = [];
  employees.forEach((element) => {
    const objAll = {
      fullName: `${element.firstName} ${element.lastName}`,
      id: element.id,
      species: element.responsibleFor.map((cur) =>
        species.find((animal) => animal.id === cur).name),
      locations: element.responsibleFor.map((cur) =>
        species.find((animal) => animal.id === cur).location),
    };
    arrayAll.push(objAll);
  });
  return arrayAll;
}

function findEmployee(employee) {
  const obj = {};
  const findPerson = data.employees.find((cur) =>
    cur.firstName === employee.name || cur.lastName === employee.name || cur.id === employee.id);
  obj.id = findPerson.id;
  obj.fullName = `${findPerson.firstName} ${findPerson.lastName}`;
  const array = [];
  const arrayLocation = [];
  findPerson.responsibleFor.forEach((element) => {
    const findAnimal = species.find((animal) => animal.id === element);
    array.push(findAnimal.name);
    arrayLocation.push(findAnimal.location);
  });
  obj.species = array;
  obj.locations = arrayLocation;
  return obj;
}

function getEmployeesCoverage(employee) {
  if (employee === undefined) {
    return undefinedEmployee();
  }
  const check = employees.some((cur) =>
    cur.firstName === employee.name || cur.lastName === employee.name || cur.id === employee.id);
  if (check === false) {
    throw new Error('Informações inválidas');
  }
  return findEmployee(employee);
}

console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
