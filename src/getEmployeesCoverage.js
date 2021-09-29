const data = require('../data/zoo_data');

// responsavel por criar o objeto usado em toda funcao, exemplo no respostaObj abaixo.

function buscarPorNome(obj) {
  const { employees } = data;
  const { species } = data;
  const retorno = employees.find((fun) =>
    fun.firstName === obj.name || fun.lastName === obj.name || fun.id === obj.id);
  // caso a busca não ache nada ja retona a msg de erro solicitada
  if (retorno === undefined) throw new Error('Informações inválidas');
  const { responsibleFor } = retorno;
  const animais = responsibleFor.map((id) => species.find((animal) => animal.id === id).name);
  const locationsT = animais.map((nome) => species.find((animal) => animal.name === nome).location);

  const respostaObj = {
    id: retorno.id,
    fullName: `${retorno.firstName} ${retorno.lastName}`,
    species: animais,
    locations: locationsT,
  };
  return respostaObj;
}

// funcao que retorna todos funcionarios com base na funcao de cima

function retornarTodosFuncionarios() {
  const { employees } = data;
  const objetoTodos = [];

  employees.forEach((funcionario) => {
    const objetoAtual = { name: funcionario.firstName };
    objetoTodos.push(objetoAtual);
  });
  const resultado = [];
  objetoTodos.forEach((fun) => resultado.push(buscarPorNome(fun)));
  return resultado;
}

function getEmployeesCoverage(entrada) {
  // seu código aqui
  if (typeof entrada === 'object') {
    return buscarPorNome(entrada);
  } if (!entrada) {
    return retornarTodosFuncionarios();
  }
}

module.exports = getEmployeesCoverage;
