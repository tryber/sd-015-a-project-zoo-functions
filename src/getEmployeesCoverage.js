const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getEmployeerInformation = employees.reduce((acc, curr) => {
  acc.push({
    id: curr.id,
    fullName: `${curr.firstName} ${curr.lastName}`,
    species: species.filter((animals) =>
      curr.responsibleFor.includes(animals.id)).map((animalName) => animalName.name),
    locations: species.filter((animals) =>
      curr.responsibleFor.includes(animals.id)).map((animalName) => animalName.location),

  });
  return acc;
}, []);
function validation(identification) {
  const { name, id } = identification; // Descontruir os parametros, para fazer a condições.
  if (name) {
    return getEmployeerInformation.find((nameEmployee) =>
      nameEmployee.fullName.split(' ').includes(name));
  } if (id) {
    return getEmployeerInformation.find((nameEmployee) => nameEmployee.id === id);
  }
}

function getEmployeesCoverage(identification) {
  if (identification === undefined) {
    return getEmployeerInformation;
  }
  if (!validation(identification)) {
    throw new Error('Informações inválidas');
  }
  return validation(identification);
}

module.exports = getEmployeesCoverage;
