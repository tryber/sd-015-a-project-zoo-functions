const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const { employees, species } = data;
  const employeeID = employees.find((empl) => empl.id === id);
  const responsible = employeeID.responsibleFor[0];
  const specie = species.find((animal) => animal.id === responsible);
  const getOldest = specie.residents.reduce((oldest, current) =>
    (oldest.age > current.age ? oldest : current));

  return Object.values(getOldest);
}

/* Primeiro usei o destructure para recuperar os funcionários e as espécies.
Encontrei o primeiro funcionário que corresponde ao ID.
Então o primeira espécie que ele é responsável.
Dentro da espécie usei o reduce para comparar as idades e receber a maior.
*/

module.exports = getOldestFromFirstSpecies;
