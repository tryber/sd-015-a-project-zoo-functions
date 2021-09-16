const { employees, species } = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const firstEmployee = employees.find((employee) => employee.id === id).responsibleFor; // array onde a pessoa está.
  const firstAnimalResponsible = species.find((specie) => specie.id === firstEmployee[0]).residents;
  // o find utilizado na firstEmployee retorna a primeira condição que for encontrada,
  // e por isso que utilizo a posição 0 abaixo.
  const getOlderAnimal = firstAnimalResponsible.reduce((acumulador, valorCorrente) =>
    ((acumulador.age > valorCorrente.age) ? acumulador : valorCorrente)); // aqui é uma verificação de cada animal
    // se for o mais velho retornará um objeto com animal mais velho, se não retornará outro animal
  return Object.values(getOlderAnimal); // aqui ele retorna da maneira que a questão pede.
};

module.exports = getOldestFromFirstSpecies;
