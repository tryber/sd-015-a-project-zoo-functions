const { species, employees } = require('../data/zoo_data');

const findEmployee = (person) => {
  if (person.name) {
    return employees.find((a) =>
      a.firstName === person.name || a.lastName === person.name);
  }

  if (person.id) {
    return employees.find((a) =>
      person.id === a.id);
  }
};

/* Função para encontrar (caso exista) um funcionário pelo nome ou ID.
O find encontra o primeiro que encaixa no parâmetro.
*/

const standardObj = (obj) => ({

  id: obj.id,
  fullName: `${obj.firstName} ${obj.lastName}`,
  species: species.filter((specie) => obj.responsibleFor
    .includes(specie.id)).map((anim) => anim.name),
  locations: species.filter((specie) => obj.responsibleFor
    .includes(specie.id)).map((anim) => anim.location),

});

/* Cria um objeto padrão com as informações que serão usadas no retorno.
O filter retorna as informações correspondentes no includes.
O map reescreve um array com as informações recebidas.
*/

function getEmployeesCoverage(person) {
  if (!findEmployee(person)) {
    throw new Error('Informações inválidas');
  }
  if (!person) {
    return employees.map((a) => standardObj(a));
  }
  return standardObj(findEmployee(person));
}

// Retorna o objeto de acordo com os parâmetros recebidos.

module.exports = getEmployeesCoverage;
