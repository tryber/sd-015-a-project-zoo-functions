const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');
// Todos os empregados na const workers
const workers = employees.map((value) => value);
// Função para retornar array de animais da pessoa
const arrayOfAnimals = (elem) => species.filter((value) => elem.responsibleFor.includes(value.id));

// Função para caso não haja parâmetro
const defaultObject = () => workers.map((element) => ({
  id: element.id,
  fullName: `${element.firstName} ${element.lastName}`,
  species: arrayOfAnimals(element).map((value) => value.name),
  locations: arrayOfAnimals(element).map((value) => value.location),
}));

function getEmployeesCoverage(param) {
  if (!param) {
    return defaultObject();
  }
  const { id, name } = param;
  if (employees.find((emp) => emp.id === id || emp.firstName === name || emp.lastName === name)) {
    const empObj = employees.find((value) =>
      value.id === id || value.firstName === name || value.lastName === name);
    return ({
      id: empObj.id,
      fullName: `${empObj.firstName} ${empObj.lastName}`,
      species: arrayOfAnimals(empObj).map((value) => value.name),
      locations: arrayOfAnimals(empObj).map((value) => value.location),
    });
  }
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
