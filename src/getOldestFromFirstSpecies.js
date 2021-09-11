const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const empregado = data.employees.find((zezinho) => zezinho.id === id);
  const primeiroAnimal = empregado.responsibleFor[0];
  const primeiraEspecie = data.species.find((animais) => animais.id === primeiroAnimal).residents;
  const maisVelho = primeiraEspecie.reduce((velho, animal) => {
    const resposta = velho.age > animal.age ? velho : animal;
    return resposta;
  }, 0);
  return Object.values(maisVelho);
}

module.exports = getOldestFromFirstSpecies;
