const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

const findEmployee = (person) => {
  let pessoacerta = '';
  if (Object.keys(person).toString() === 'name') {
    pessoacerta = data.employees.find((elemento) =>
      elemento.firstName === person.name || elemento.lastName === person.name);
  } if (Object.keys(person).toString() === 'id') {
    pessoacerta = data.employees.find((elemento) => elemento.id === person.id);
  }
  if (pessoacerta !== undefined) {
    return pessoacerta;
  } throw new Error('Informações inválidas');
};

const location = (person) => {
  const pessoa = findEmployee(person).responsibleFor;
  const resultado = [];
  pessoa.forEach((elemento) => {
    data.species.forEach((elemento2) => {
      if (elemento === elemento2.id) {
        resultado.push(elemento2.location);
      }
    });
  });
  return resultado;
};

function getEmployeesCoverage(person) {
  const pessoa = person;
  if (pessoa !== undefined) {
    const resultFind = findEmployee(pessoa);
    const resultlocation = location(pessoa);
    return { id: resultFind.id,
      fullName: `${resultFind.firstName} ${resultFind.lastName}`,
      species: resultFind.responsibleFor.map((specieId) =>
        species.find((specie) => specie.id === specieId).name),
      locations: resultlocation,
    };
  }
  return employees.map((elemento) => ({
    id: elemento.id,
    fullName: `${elemento.firstName} ${elemento.lastName}`,
    species: elemento.responsibleFor.map((specieId) =>
      species.find((specie) => specie.id === specieId).name),
    locations: location({ name: `${elemento.firstName}` }),
  }));
}
module.exports = getEmployeesCoverage;
