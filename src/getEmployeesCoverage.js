const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// Busca o nome das especies
const getSpecies = (speciesIds) =>
  speciesIds.map((animalId) => species.find((specie) => specie.id === animalId).name
);

//Busca a localização das especies
const getLocation = (speciesIds) =>
  speciesIds.map((animalId) => species.find((specie) => specie.id === animalId).location
);

// 
const getEmployees = () =>
  employees.map((employee) => {
    const object = { 
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: getSpecies(employee.responsibleFor),
      locations: getLocation(employee.responsibleFor), 
    };
    return object;
  });

  // Caso nenhuma pessoa seja encontrada com o nome, sobrenome ou id, um erro é gerado.
  const verifyEmployeeInformations = (name, id) => {
    const verified = employees.some((employee) =>
        employee.firstName === name
        || employee.lastName === name
        || employee.id === id,
    );
    if (verified === false) throw new Error('Informações inválidas');
  };

  //
  const allEmployees = getEmployees();

  const getEmployeeById = (id) => {
    return allEmployees.find((employee) => employee.id === id);
  };

  //

  const getEmployeeByName = (name) => {
    return allEmployees.find((employee) => employee.fullName.includes(name));
  }

function getEmployeesCoverage(employee) {
  if (employee === undefined) return getEmployees(); // 1

  const { name, id } = employee;
  verifyEmployeeInformations(name, id);
  if (name) return getEmployeeByName(name);
  if (id) return getEmployeeById(id);
}

// 1 : retornar um array com a cobertura de todas as pessoas funcionárias.
// 2 : 

// Referência: [Guilherme Polippo] https://github.com/tryber/sd-015-a-project-zoo-functions/pull/100/commits/101555f04e52ce4f75b882d2979984011f37067a

module.exports = getEmployeesCoverage;
