const data = require('../data/zoo_data');

function getEmployeesCoverage(employee) {
  const simplifyI = Object.values(employee);
  const simplify = simplifyI[0];
  const findEmployeeName = data.employees.find((find) =>
    find.firstName === simplify || find.lastName === simplify || find.id === simplify);
  if (findEmployeeName === undefined) {
    throw new Error('Informações inválidas');
  }
  const findId = findEmployeeName.responsibleFor;
  const findSpecies = [];
  for (let i = 0; i < findId.length; i += 1) {
    findSpecies.push(data.species.find((find) => find.id === findId[i]));
  }
  const speciesName = [];
  const speciesLocation = [];
  for (let i = 0; i < findSpecies.length; i += 1) {
    speciesName.push(findSpecies[i].name);
    speciesLocation.push(findSpecies[i].location);
  }
  const employeeCover = {
    id: findEmployeeName.id,
    fullName: `${findEmployeeName.firstName} ${findEmployeeName.lastName}`,
    species: speciesName,
    locations: speciesLocation,
  };
  return employeeCover;
}

module.exports = getEmployeesCoverage;
