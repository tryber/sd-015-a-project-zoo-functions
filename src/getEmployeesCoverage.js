const data = require('../data/zoo_data');
const speciesById = require('./getSpeciesByIds');

// you tube mentorias (sabado) e git

const funcEmployees = () => {
  const employe = data.employees.map((element) => ({
    id: element.id,
    fullName: `${element.firstName} ${element.lastName}`,
    species: speciesById(...element.responsibleFor).map((el) => el.name),
    locations: speciesById(...element.responsibleFor).map((el) => el.location),
  }));
  return employe;
};

const funcEmploye = (employeId) => {
  const employe = funcEmployees();
  return employe.find((element) => element.id === employeId.id
    || element.fullName.includes(employeId.name));
};

function getEmployeesCoverage(param) {
  const callfuncEmployees = funcEmployees();
  if (param === undefined) {
    return callfuncEmployees;
  }

  const callfuncEmploye = funcEmploye(param);
  if (!callfuncEmploye) {
    throw new Error('Informações inválidas');
  }
  return callfuncEmploye;
}

module.exports = getEmployeesCoverage;
