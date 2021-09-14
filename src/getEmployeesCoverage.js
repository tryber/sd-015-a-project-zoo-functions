const data = require('../data/zoo_data');

function specieIdToSpecieName(responsibleForArray) { // Função que troca 'specie.id' por 'specie.name', dos arrays 'employees.responsibleFor'.
  const resultArray = [];
  responsibleForArray.forEach((specie) => {
    const thisTurnSpecieName = data.species.find((specie2) => specie2.id === specie).name;
    resultArray.push(thisTurnSpecieName);
  });
  return resultArray;
} // specieIdToSpecieName([snakesId, elephantsId]) --> [snakes, elephants]

function getEachSpecieLocation(responsibleForArray) { // Função que descobre a localização de cada espécie presente em um 'employee.responsibleFor'.
  const resultArray = [];
  responsibleForArray.forEach((specie) => {
    const thisTurnLocation = data.species.find((specie2) => specie2.id === specie).location;
    resultArray.push(thisTurnLocation);
  });
  return resultArray;
} // getEachSpecieLocation([ottersId, giraffesId]) --> [SE, NE]

function employeesList() { // Função que retorna um array com vários objetos. Cada um desses objetos contém informações específicas (id, fullname, species...), de um determinado 'employee'.
  let newObj = {};
  const resultArray = [];

  data.employees.forEach((employee) => {
    newObj = {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: specieIdToSpecieName(employee.responsibleFor),
      locations: getEachSpecieLocation(employee.responsibleFor),
    };

    resultArray.push(newObj);
    newObj = {};
  });
  return resultArray;
}

const allIds = employeesList().map((employee) => employee.id); // Constante que acumula a 'id', de cada um dos funcionários.

function allNames() { // Função que retorna um array com o 'firstName' e 'lastName' de todos os 'employees'
  const allNamesArray = [];
  data.employees.forEach((employee) => {
    allNamesArray.push(employee.firstName);
    allNamesArray.push(employee.lastName);
  });
  return allNamesArray;
}

function getEmployeesCoverage(inputObj) {
  if (inputObj === undefined) {
    return employeesList();
  } if (allNames().includes(inputObj.name)) {
    return employeesList().find((employee) =>
      Object.values(employee)[1].includes(inputObj.name));
  } if (allIds.includes(inputObj.id)) {
    return employeesList().find((employee) =>
      Object.values(employee)[0].includes(inputObj.id));
  }
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
