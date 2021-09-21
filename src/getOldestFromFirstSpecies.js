const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const selectedId = employees.find((elemento) => elemento.id === id).responsibleFor[0];
  const selectedAnimal = species.find((elemento) => elemento.id === selectedId);
  const meusAnimais = selectedAnimal.residents;
  let maior = 0;
  for (let i = 0; i < meusAnimais.length; i += 1) {
    if (meusAnimais[i].age > maior) {
      maior = meusAnimais[i];
    }
  }
  return Object.values(maior);
}

console.log(getOldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

// module.exports = getOldestFromFirstSpecie    s;
