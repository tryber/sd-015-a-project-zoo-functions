const data = require('../data/zoo_data');

function getSpeciesById(speciesId) { // Recebe array com ids das espécies.
  const selectedSpecieArr = []; // Array onde o nome das espécies estará armazenado.
  speciesId.forEach((specie) => { // Procura espécie que tenha o mesmo id.
    const selectedSpecie = data.species.find(
      (zooSpecie) => specie === zooSpecie.id,
    );
    selectedSpecieArr.push(selectedSpecie); // Armazena espécie no array selectedSpecieArr.
  });
  return selectedSpecieArr;
}

function getEmployee(employeeData) { // Recebe obj do funcionário e retorna obj com infos do funcionário.
  const employeeCoverage = { // Cria objeto com infos do funcionário passado como argumento.
    id: employeeData.id,
    fullName: `${employeeData.firstName} ${employeeData.lastName}`,
    species: getSpeciesById(employeeData.responsibleFor).map( // Retorna o nome das espécies que o funcionário é responsável.
      (specie) => specie.name,
    ),
    locations: getSpeciesById(employeeData.responsibleFor).map( // Retorna a localização das espécies que o funcionário é responsável.
      (specie) => specie.location,
    ),
  };
  return employeeCoverage; // Retorna obj com infos do funcionário.
}

function getAllEmployees() { // Retorna array com objetos de todos os funcionários.
  const mappedData = data.employees.map((employeeData) => getEmployee(employeeData)); // Executa a função getEmployee em todos os funcionário.
  return mappedData; // Retorna array com as informações dos funcionários.
}

function getEmployeesCoverage(searchData) {
  // seu código aqui
  if (!searchData) { // Caso não tenha argumentos, retorna todos funcionários.
    return getAllEmployees();
  }
  const employeeData = data.employees.find( // Procura funcionário que possua id ou nome.
    (employee) =>
      employee.id === searchData.id
    || employee.firstName === searchData.name
    || employee.lastName === searchData.name,
  );

  if (employeeData === undefined) { // Caso não ache funcionário com id ou nome, retorna erro.
    throw new Error('Informações inválidas');
  }

  return getEmployee(employeeData); // Retorna funcionário.
}

module.exports = getEmployeesCoverage;
