// const data = require('../data/zoo_data');
const { species, employees } = require('../data/zoo_data');

const person = (unit) => ({
  id: unit.id,
  fullName: `${unit.firstName} ${unit.lastName}`,
  species: unit.responsibleFor.map((animal) =>
    species.find((specie) => specie.id === animal).name),
  locations: unit.responsibleFor.map((animal) =>
    species.find((specie) => specie.id === animal).location),
});

// Ao chamar a função sem argumentos ela deve retornar um array com a cobertura de todas as pessoas funcionárias.
const people = () =>
  employees.map((all) => ({
    id: all.id,
    fullName: `${all.firstName} ${all.lastName}`,
    species: all.responsibleFor.map((animal) =>
      species.find((specie) => specie.id === animal).name),
    locations: all.responsibleFor.map((animal) =>
      species.find((specie) => specie.id === animal).location),
  }));

function getEmployeesCoverage(search) {
  // seu código aqui
  if (!search) {
    return people();
  }

  const { name, id } = search;
  const lookup = employees.find((seek) =>
    seek.firstName === name || seek.lastName === name || seek.id === id);

  // Caso nenhuma pessoa seja encontrada com o nome, sobrenome ou id, deverá ser lançado um erro gerado com a função construtora Error da biblioteca padrão do JavaScript com a mensagem "Informações inválidas"
  if (!lookup) throw new Error('Informações inválidas');

  return person(lookup);
}

module.exports = getEmployeesCoverage;
