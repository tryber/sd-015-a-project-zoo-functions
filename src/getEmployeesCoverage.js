// Ref:
// https://github.com/tryber/sd-015-a-project-zoo-functions/tree/leonardo-felix-zoo-functions-project
// https://github.com/tryber/sd-015-a-project-zoo-functions/tree/pedro-guarize-zoo-functions-project

const data = require('../data/zoo_data');
const { species, employees } = require('../data/zoo_data');

const structure = (employ) => (
  {
    id: employ.id,
    fullName: `${employ.firstName} ${employ.lastName}`,
    species: employ.responsibleFor.map((creature) =>
      species.find((spec) => spec.id === creature).name),
    locations: employ.responsibleFor.map((creature) =>
      species.find((spec) => spec.id === creature).location),
  }
);
const employeeAll = () => employees.map((employ) => (structure(employ)));
const uniqueEmp = (obj) => structure(obj);

const getEmployeesCoverage = (nameID) => {
  // seu código aqui
  if (nameID === undefined) return employeeAll();
  const { name, id } = nameID;
  const getEmp = employees.find((employ) => employ.firstName === name || employ.lastName === name
  || employ.id === id);
  if (getEmp === undefined) throw new Error('Informações inválidas');
  return uniqueEmp(getEmp);
};

module.exports = getEmployeesCoverage;
