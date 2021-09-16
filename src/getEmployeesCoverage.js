const data = require('../data/zoo_data');
// @limarodrigoo repositório consultado: https://github.com/tryber/sd-015-a-project-zoo-functions/blob/2da0ceaed632e33d75a20c2b806f3c1c0a5383de/src/getEmployeeByName.js

function getEmployeesCoverage(employeeName) {
  if (employeeName) { // Se employeeName for verdadeiro, e é, vai rodar o código abaixo. Serve ṕra dizer que há um employeeName como parametro.
    return data.employees.find((person) => // no arquivo data, a propriedade employess terá aplicação do find.
      person.firstName === employeeName || person.lastName === employeeName);// find retorna a propriedade firstName da propriedade person se for igual ao parametro ou a propriedade lastName
  }
  return {}; // se não houver employeeName retorna uma chave vazia.
}

module.exports = getEmployeesCoverage;
