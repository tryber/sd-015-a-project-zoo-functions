const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// Feito com ajuda do video: https://www.youtube.com/watch?v=NiLUGy1Mh4U&ab_channel=LeighHalliday

function getOldestFromFirstSpecies(id) {
  const selectedId = employees.find((elemento) => elemento.id === id).responsibleFor[0];
  const selectedAnimal = species.find((elemento) => elemento.id === selectedId);
  const meusAnimais = selectedAnimal.residents;
  const maisVelho = meusAnimais.reduce((acc, animal) => {
    if (acc === null || animal.age > acc) return animal.age;
    return acc;
  }, null);
  const meuSelecionado = meusAnimais.filter((elemento) => elemento.age === maisVelho)[0];
  const { name } = meuSelecionado;
  const { sex } = meuSelecionado;
  const { age } = meuSelecionado;
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
