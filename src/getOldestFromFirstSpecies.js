const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const funcionario = data.employees.find((pessoa) => pessoa.id === id);
  const idAnimal = funcionario.responsibleFor[0];
  const animal = data.species.find((bicho) => bicho.id === idAnimal);
  let contador = 0;
  animal.residents.forEach((resident, index) => {
    if (resident.age > animal.residents[contador].age) {
      contador = index;
    }
  });
  return Object.values(animal.residents[contador]);
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
