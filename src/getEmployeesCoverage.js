const data = require('../data/zoo_data');

// 10. Implemente a função getEmployeesCoverage
// Esta função será responsável por associar informações de cobertura das pessoas funcionárias.

// A cobertura deverá ser representada por um objeto com as seguintes propriedades:

// {
//   "id": "4b40a139-d4dc-4f09-822d-ec25e819a5ad", // id da pessoa
//   "fullName": "Sharonda Spry", // nome completo: firstName + lastName
//   "species": [ "otters", "frogs" ], // espécies as quais a pessoa é responsável
//   "locations": [ "SE", "SW" ], // Um array contendo todas as localizações das espécies
// }
// A função deve receber um objeto de opções que determinará seu comportamento, sendo:

// name: O nome ou sobrenome da pessoa a ser buscada
// id: O id da pessoa a ser buscada
// Exemplos de uso da função getEmployeesCoverage:

// getEmployeesCoverage({ name: 'Sharonda' });
// getEmployeesCoverage({ name: 'Spry' });
// getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' });
// Saída:

// {
//   "id": "4b40a139-d4dc-4f09-822d-ec25e819a5ad",
//   "fullName": "Sharonda Spry",
//   "species": [ "otters", "frogs" ],
//   "locations": [ "SE", "SW" ]
// }
// Ao ser chamada sem argumentos, deverá retornar um array com a cobertura de todas as pessoas funcionárias:

// Exemplo:

// getEmployeesCoverage();
// Saída:

// [
//   {
//     "id": "c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1",
//     "fullName": "Nigel Nelson",
//     "species": [ "lions", "tigers" ],
//     "locations": [ "NE", "NW" ],
//   },
//   {
//     "id": "0e7b460e-acf4-4e17-bcb3-ee472265db83",
//     "fullName": "Burl Bethea",
//     "species": [ "lions", "tigers", "bears", "penguins" ],
//     "locations": [ "NE", "NW", "NW", "SE" ],
//   },
//   {
//     "id": "fdb2543b-5662-46a7-badc-93d960fdc0a8",
//     "fullName": "Ola Orloff",
//     "species": [ "otters", "frogs", "snakes", "elephants" ],
//     "locations": [ "SE", "SW", "SW", "NW" ],
//   },
//   //[...]
// ];
// Caso nenhuma pessoa seja encontrada com o nome, sobrenome ou id, deverá ser lançado um erro gerado com a função construtora Error da biblioteca padrão do JavaScript com a mensagem "Informações inválidas". Exemplo:

// throw new Error('Informações inválidas');
// Você pode ler mais sobre a função construtora Error, neste link.

// Dica: Crie funções que dividam a tarefa em partes menores, por exemplo, você poderia criar uma função getSpecies encarregada somente por buscar o nome das espécies que a pessoa é responsável.

// Observações técnicas

// Ao receber o objeto de opções com a propriedade name, procura a pessoa funcionária correspondente;
// A opção name deverá aceitar nome e sobrenome para realizar a busca;
// Ao chamar a função sem argumentos ela deve retornar um array com a cobertura de todas as pessoas funcionárias.
// O que será avaliado

// Se o objeto de opções tiver a propriedade name, retorna somente a pessoa correspondente;
// A propriedade name do objeto de opções também funciona usando o segundo nome;
// Se o objeto de opções tiver a propriedade id, retorna somente a pessoa correspondente;
// Sem parâmetros, retorna uma lista com a cobertura de todas as pessoas funcionárias;
// Caso não haja nenhuma pessoa com o nome ou id especificados deverá ser lançado um error.

function getSpecie(specieId) {
  const findSpecie = data.species.find((specie) => specie.id === specieId);
  return findSpecie;
}

function getEmployeeByNameOrId(name, id) {
  const findEmployee = data.employees.find((employee) =>
    (employee.firstName === name)
    || (employee.lastName === name)
    || (employee.id === id));

  if (!findEmployee) throw new Error('Informações inválidas');

  return findEmployee;
}

function getEmployeeCoverage(employee) {
  const species = [];
  const locations = [];
  employee.responsibleFor.forEach((responsability) => {
    const specie = getSpecie(responsability);
    if (specie) {
      species.push(specie.name);
      locations.push(specie.location);
    }
  });
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species,
    locations,
  };
}

function getEmployeesCoverage(params) {
  if (params) {
    const { name, id } = params;
    if (name || id) {
      const employee = getEmployeeByNameOrId(name, id);
      return getEmployeeCoverage(employee);
    }
  }

  const employeesCoverage = [];

  data.employees.forEach((employee) => {
    const coverage = getEmployeeCoverage(employee);
    employeesCoverage.push(coverage);
  });

  return employeesCoverage;
}

module.exports = getEmployeesCoverage;
