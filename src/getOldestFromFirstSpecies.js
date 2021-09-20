const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const funcionarios = data.employees.find((funcionario) => funcionario.id === id);
  const animal = species.find((specie) => funcionarios.responsibleFor.includes(specie.id));

  const retorno = {
    value: 0,
    name: '',
    sex: '',
  };

  for (let element of animal.residents) {
    if (element.age > retorno.value) {
      retorno.value = element.age;
      retorno.name = element.name;
      retorno.sex = element.sex;
    }
  }
  return [retorno.name, retorno.sex, retorno.value];
}

module.exports = getOldestFromFirstSpecies;
