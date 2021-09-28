const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

// Função que busca todos os funcionarios e cria um novo array com objetos personalizados:
function fullList() {
  const allEmployees = employees.map((person) => ({
    id: person.id,
    fullName: `${person.firstName} ${person.lastName}`,
    species: person.responsibleFor.map((id) => species
      .find((animal) => animal.id === id).name),
    locations: person.responsibleFor.map((id) => species
      .find((animal) => animal.id === id).location),
  }));
  return allEmployees;
}
// Busca o funcionário pelo nome ou sobrenome, com a mesma estrutrura da função "fullList"
function findByName(name) {
  const byName = employees.find((person) => person.firstName === name || person.lastName === name);
  return ({
    id: byName.id,
    fullName: `${byName.firstName} ${byName.lastName}`,
    species: byName.responsibleFor.map((id) => species
      .find((animal) => animal.id === id).name),
    locations: byName.responsibleFor.map((id) => species
      .find((animal) => animal.id === id).location),
  });
}
// Busca o funcionário pelo ID, com a mesma estrutrura da função "fullList"
function findById(id) {
  const byId = employees.find((person) => person.id === id);
  return ({
    id: byId.id,
    fullName: `${byId.firstName} ${byId.lastName}`,
    species: byId.responsibleFor.map((idPerson) => species
      .find((animal) => animal.id === idPerson).name),
    locations: byId.responsibleFor.map((idPerson) => species
      .find((animal) => animal.id === idPerson).location),
  });
}
// Função principal que une todas as outras:
function getEmployeesCoverage(parameters) {
  if (!parameters) {
    return fullList();
  }
  const { name, id } = parameters;
  // Faz a vistoria em employees para verificar se o nome ou ID passado como parametro existe:
  const dataBaseCheck = employees.find((person) => person.firstName === name
  || person.lastName === name || person.id === id);
  if (dataBaseCheck === undefined) {
    throw new Error('Informações inválidas');
  }
  if (parameters.name) {
    return findByName(parameters.name);
  } if (parameters.id) {
    return findById(parameters.id);
  }
}

module.exports = getEmployeesCoverage;
