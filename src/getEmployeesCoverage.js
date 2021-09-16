const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const allEmployees = (funcionario) => ({
  id: funcionario.id,
  fullName: `${funcionario.firstName} ${funcionario.lastName}`,
  species: funcionario.responsibleFor
// refatorei a composição do array pra atender os requisitos da questão
    .map((specieId) => species
      .find((specie) => specie.id === specieId).name),
  locations: funcionario.responsibleFor
// usei a função map para gerar um novo array com os funcionarios encontradas pelo find();
    .map((specieId) => species
      .find((specie) => specie.id === specieId).location),
});
// referencia ao meu amigo samuel que me ajudou nessa parte.

const noValueParam = () => employees.map((funcionario) => allEmployees(funcionario));
// caso os valores passados como argumento na função principal sejam invalidos essa função é acionada como callback trazendo como resultado o array criado na função allEmployees();

const getName = (employeeName) => {
  const funcionario = employees.find((employee) => employee.firstName === employeeName)
  || employees.find((employee) => employee.lastName === employeeName);
  return allEmployees(funcionario);
};
// caso o valor do parâmetro passado for um name ou last name se usa o find para achar dentro do array employees qual name ou last name se encixa com o valor passado e a função allEMployees é acionada com o novo parâmetro. 

const getId= (employeeId) => {
  const funcionario = employees.find((employee) => employee.id === employeeId);
  return allEmployees(funcionario);
};
// caso o valor do parâmetro passado for um id se usa o find para achar dentro do array employees id se encaixa com o valor passado e a função allEMployees é acionada com o novo parâmetro. 

const getEmployeesCoverage = (employeeTarget) => {
  if (!employeeTarget) return noValueParam();
// caso não tenha um valor definido para o parâmetro se retorna a função no valueParam();
  if (employees.map((employee) => employee.firstName).includes(employeeTarget.name)
  || employees.map((employee) => employee.lastName).includes(employeeTarget.name)) {
    return getName(employeeTarget.name);
  }
// se for um nome ou sobrenome é chamada a função getName com o parametro novo
  if (employees.map((employee) => employee.id).includes(employeeTarget.id)) {
    return getId(employeeTarget.id);
  }
// mesmo processo anterior mas com o parametro id
  throw new Error('Informações inválidas');
};
// caso seja passado um valor para o parametro mas não exista dentro do array employees se retorna um Error()
module.exports = getEmployeesCoverage;