/* Considerando a boa prática de dividir o código em partes menores, apresentamos a função getRelatedEmployees em que você deverá dividí-la em duas funções:

1 - isManager - que será responsável por verificar se uma pessoa colaboradora é gerente ou não. O retorno dessa função deve ser um booleano: true ou false;

2 - getRelatedEmployees - que utiliza a primeira função para apresentar as seguintes saídas:

se for uma pessoa colaboradora gerente, deve retornar um array contendo os nomes das pessoas colaboradoras que ela é responsável;
se não for uma pessoa colaboradora gerente, deverá ser lançado um erro gerado com a função construtora Error da biblioteca padrão do JavaScript com a mensagem "O id inserido não é de uma pessoa colaboradora gerente!".
Exemplo:

throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
Você pode ler mais sobre a função construtora Error, neste link.

Observações técnicas

Retorna um array contendo nome e sobrenome das pessoas colaboradoras gerenciadas por determinada pessoa com cargo de gerência.
Exemplo de output:

[ 'Burl Bethea', 'Ola Orloff', 'Emery Elser' ];
Dispara um erro com a mensagem: "O id inserido não é de uma pessoa colaboradora gerente!".
O que será avaliado

Retorna true se o id passado for de um gerente;
Retorna false se o id passado não for de um gerente;
Se o id passado for de um gerente, retorna um array contendo nome e sobrenome das pessoas colaboradoras que ela é responsável;
Se o id passado não for de um gerente, dispara um erro com a mensagem: "O id inserido não é de uma pessoa colaboradora gerente!". */

const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const managers = ['9e7d4524-363c-416a-8759-8aa7e50c0992','b0dc644a-5335-489b-8a2c-4e086c7819a2',
  'fdb2543b-5662-46a7-badc-93d960fdc0a8', '0e7b460e-acf4-4e17-bcb3-ee472265db83'];
function isManager(id) {
  const notManager = managers.some((manager) => {
    if (manager === id) return true;
    return false;
  });
  // console.log(notManager);
  return notManager;
}
isManager('9e7d4524-363c-416a-8759-8aa7e50c0992');
function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const arrNameLastName = employees.filter((objName) => objName.managers.includes(managerId));
    return arrNameLastName.map((funcionario) => `${funcionario.firstName} ${funcionario.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992');
module.exports = { isManager, getRelatedEmployees };
