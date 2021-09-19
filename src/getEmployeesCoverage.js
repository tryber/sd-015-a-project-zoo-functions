const data = require('../data/zoo_data');

const createArrayofAnimals = (idEmployee) => {
  const getEmployee = data.employees.find((e) => e.id.includes(idEmployee)
  || e.firstName.includes(idEmployee) || e.lastName.includes(idEmployee));
  const getAnimalsIDs = getEmployee.responsibleFor;
  const filterAnimal = data.species.filter((e) => getAnimalsIDs.includes(e.id));
  const createArray = filterAnimal.reduce((acc, curr) => {
    acc.push(curr.name);
    return acc;
  }, []);
  return createArray;
};

const createArrayofLocations = (idEmployee) => {
  const getEmployee = data.employees.find((e) => e.id.includes(idEmployee)
  || e.firstName.includes(idEmployee) || e.lastName.includes(idEmployee));

  const getAnimalsIDs = getEmployee.responsibleFor;
  const filterAnimal = data.species.filter((e) => getAnimalsIDs.includes(e.id));
  const createArray = filterAnimal.reduce((acc, curr) => {
    acc.push(curr.location);
    return acc;
  }, []);
  return createArray;
};

// tentando não usar reduce agora
const teste = () => data.employees.map((e) => ({
  id: e.id,
  fullName: `${e.firstName} ${e.lastName}`,
  species: e.responsibleFor.map((animal) => data.species.find((j) => j.id === animal).name),
  locations: e.responsibleFor.map((animal) => data.species.find((j) => j.id === animal).location),
}));

const createTable = (idEmployee) => {
  const getEmployee = data.employees.filter((e) => e.id.includes(idEmployee)
  || e.firstName.includes(idEmployee) || e.lastName.includes(idEmployee));
  const createObject = getEmployee.reduce((acc, curr) => {
    acc.id = curr.id;
    acc.fullName = `${curr.firstName} ${curr.lastName}`;
    acc.species = createArrayofAnimals(idEmployee);
    acc.locations = createArrayofLocations(idEmployee);
    return acc;
  }, {});
  return createObject;
};

const checkId = (id) => {
  const idtest = createTable(id);
  if (Object.keys(idtest).length === 0) throw new Error('Informações inválidas');
  else {
    return idtest;
  }
};

const getEmployeesCoverage = (idEmployee) => {
  if (idEmployee === undefined) return teste();
  const { name, id } = idEmployee;
  if (name) return createTable(name);
  if (id) {
    return checkId(id);
  }
};

module.exports = getEmployeesCoverage;
