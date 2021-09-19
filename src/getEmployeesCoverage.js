const data = require('../data/zoo_data');
const speciesById = require('./getSpeciesByIds'); // exporto o exercicio 1, pois ele retorna um array com as especies dos animais

const funcEmpregados = () => {
  const empregados = data.employees.map((element) => ({ // faço um map dos empregados, e crio um objeto pra cada elemento de array employees
    id: element.id, // chave - id/ valor - id do elemento atual
    fullName: `${element.firstName} ${element.lastName}`, // chave - fullname / valor - primeiro nome, e ultimo nome do elemento atual
    species: speciesById(...element.responsibleFor).map((el) => el.name), // chave - species / valor - passo para speciesById o id dos animais(responsibleFor), q me retorna o array da specie desse id. Uso o map para pegar o nome da specie achada no id retornado
    locations: speciesById(...element.responsibleFor).map((el) => el.location),
  }));
  return empregados;
};
// console.log(funcEmpregados());

const funcFuncionario = (funcionarioId) => {
  const funcionarioS = funcEmpregados(); // pego a função empregados q já tem a informação de todos eles
  return funcionarioS.find((element) => element.id === funcionarioId.id // se o id dos empregados for igual ao id passado como parâmetro, mostre esse elemento
    || element.fullName.includes(funcionarioId.name)); // se o fullname de empregados tiver o nome ou o sobrenome passado como parametro, mostre esse elemento
};
// console.log(funcFuncionario({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));

function getEmployeesCoverage(param) {
  // seu código aqui
  const chamaFuncEmpregados = funcEmpregados();
  if (param === undefined) { // se o parametro passado em getEmployeesCovarege for undefined
    return chamaFuncEmpregados; // retorne a função dos empregados
  }

  const chamafuncFuncionario = funcFuncionario(param);
  if (!chamafuncFuncionario) { // se chamafuncFuncionario não achar o nome ou o sobrenome, nem o id
    throw new Error('Informações inválidas'); // retorne o erro
  }
  return chamafuncFuncionario; // se achar o parametro passado, retorne o array com as informações
}
// console.log(getEmployeesCoverage());
module.exports = getEmployeesCoverage;
