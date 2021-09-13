/* ### 4. Implemente a função `getRelatedEmployees`

Considerando a boa prática de dividir o código em partes menores, apresentamos a função `getRelatedEmployees` em que você deverá dividí-la em duas funções:

1 - `isManager` - que será responsável por verificar se uma pessoa colaboradora é gerente ou não. O retorno dessa função deve ser um booleano: `true` ou `false`;

2 - `getRelatedEmployees` - que utiliza a primeira função para apresentar as seguintes saídas:
  * se for uma pessoa colaboradora gerente, deve retornar um array contendo os nomes das pessoas colaboradoras que ela é responsável;
  * se **não** for uma pessoa colaboradora gerente, deverá ser lançado um erro gerado com a função construtora **Error** da biblioteca padrão do JavaScript com a mensagem **"O id inserido não é de uma pessoa colaboradora gerente!"**.

Exemplo:

```javascript
throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
```

Você pode ler mais sobre a [função construtora **Error**, neste link.](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error)

  **Observações técnicas**

  - Retorna um array contendo nome e sobrenome das pessoas colaboradoras gerenciadas por determinada pessoa com cargo de gerência.

  Exemplo de output:

  ```javascript
  [ 'Burl Bethea', 'Ola Orloff', 'Emery Elser' ];
  ```

  - Dispara um erro com a mensagem: "O id inserido não é de uma pessoa colaboradora gerente!".

  **O que será avaliado**

  - Retorna `true` se o id passado for de um gerente;
  - Retorna `false` se o id passado não for de um gerente;
  - Se o id passado for de um gerente, retorna um array contendo nome e sobrenome das pessoas colaboradoras que ela é responsável;
  - Se o id passado **não** for de um gerente, dispara um erro com a mensagem: "O id inserido não é de uma pessoa colaboradora gerente!".

--- */
const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// const tigersId = 'e8481c1d-42ea-4610-8e11-1752cfc05a46';
// const elephantsId = 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

function isManager(id) {
  return employees.some((element) =>
    element.managers.includes(id));
}
// console.log(isManager(elephantsId));

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return employees
      .filter((element) => element.managers.includes(managerId))
      .map((element) => `${element.firstName} ${element.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
console.log(getRelatedEmployees(burlId));
module.exports = { isManager, getRelatedEmployees };
