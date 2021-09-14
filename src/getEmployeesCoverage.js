const data = require('../data/zoo_data');

const getEmployee = (args) => {
  const param = Object.values(args).join();
  return data.employees.filter((item) =>
    item.firstName === param || item.lastName === param || item.id === param);
};

const getElementSpecies = (args) => {
  const species = [];
  const animals = [];
  getEmployee(args).map((item) => item.responsibleFor.map((item2) => species.push(item2)));
  for (let index = 0; index < species.length; index += 1) {
    animals.push(data.species.filter((item) => item.id === species[index]));
  }
  return animals;
};

const getLocation = (args) => {
  const animals = getElementSpecies(args);
  const locations = [];
  animals.forEach((item) => item.forEach((item2) => locations.push(item2.location)));
  return locations;
};

const getSpecies = (args) => {
  const animals = getElementSpecies(args);
  const species = [];
  animals.forEach((item) => item.forEach((item2) => species.push(item2.name)));
  return species;
};

const employeesCheck = (args) => {
  const param = Object.values(args).join();
  return data.employees.some((item) =>
    item.firstName === param || item.lastName === param || item.id === param);
};

function getAllEmployees(args) {
  // seu código aqui
  let id;
  let firstName;
  let lastName;
  getEmployee(args).forEach((element) => {
    id = element.id;
    firstName = element.firstName;
    lastName = element.lastName;
  });
  return { id,
    fullName: `${firstName} ${lastName}`,
    species: getSpecies(args),
    locations: getLocation(args) };
}

const nigel = getAllEmployees({ name: 'Nigel' });
const burl = getAllEmployees({ name: 'Burl' });
const ola = getAllEmployees({ name: 'Ola' });
const wilburn = getAllEmployees({ name: 'Wilburn' });
const stephanie = getAllEmployees({ name: 'Stephanie' });
const sharonda = getAllEmployees({ name: 'Sharonda' });
const ardith = getAllEmployees({ name: 'Ardith' });
const emery = getAllEmployees({ name: 'Emery' });

const allEmployees = () => {
  const employees = [];
  employees.push(nigel, burl, ola, wilburn, stephanie, sharonda, ardith, emery);
  return employees;
};

function getEmployeesCoverage(args) {
  // seu código aqui
  if (!args) return allEmployees();
  let id;
  let firstName;
  let lastName;
  getEmployee(args).forEach((item) => {
    id = item.id;
    firstName = item.firstName;
    lastName = item.lastName;
  });
  if (!employeesCheck(args)) throw new Error('Informações inválidas');

  return { id,
    fullName: `${firstName} ${lastName}`,
    species: getSpecies(args),
    locations: getLocation(args) };
}

module.exports = getEmployeesCoverage;
