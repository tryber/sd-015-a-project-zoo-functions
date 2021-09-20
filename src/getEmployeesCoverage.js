const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function selectAnimal(key, empregado) {
  return species.filter((bicho) =>
    empregado.responsibleFor.includes(bicho.id)).map((xablau) => xablau[key]);
}

function getEmployeesById() {
  return employees.map((empregado) => {
    const returnMap = {
      id: empregado.id,
      fullName: `${empregado.firstName} ${empregado.lastName}`,
      species: selectAnimal('name', empregado),
      locations: selectAnimal('location', empregado),
    };
    return returnMap;
  });
}
function getEmployeesCoverage(employee) {
  const arrayName = getEmployeesById();
  if (!employee) {
    return arrayName;
  }
  const resultado = arrayName.find((nome) =>
    nome.fullName.includes(employee.name) || nome.id.includes(employee.id));
  if (!resultado) {
    throw new Error('Informações inválidas');
  }
  return resultado;
}

module.exports = getEmployeesCoverage;
