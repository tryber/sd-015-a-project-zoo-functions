const { species, employees } = require('../data/zoo_data');

const EmployeeData = (employee) => ({
  id: employee.id,
  fullName: `${employee.firstName} ${employee.lastName}`,

  species: employee.responsibleFor
    .map((animal) => species
      .find((specie) => specie.id === animal).name),

  locations: employee.responsibleFor
    .map((animal) => species
      .find((specie) => specie.id === animal).location),
});

const getEmployeesCoverage = (idOrName) => {
  if (idOrName === undefined) {
    const allEmployeesData = employees.map(EmployeeData);
    return allEmployeesData;
    // sem parâmetros, retorna uma lista com os dados de todos os funncionários
  }
  const { name, id } = idOrName;
  const emplo = employees.find((employee) => employee.firstName === name
  || employee.lastName === name || employee.id === id);
  // Buscando o nome ou id especifico, jogando na variavel emplo o objeto em questão

  if (emplo === undefined) {
    throw new Error('Informações inválidas');
    // Se o nome ou id não forem validos retorna um erro
  }
  return EmployeeData(emplo);
};

module.exports = getEmployeesCoverage;
