const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const { employees, species} = data;
  const employeesID = employees.find((empl) => empl.id === id);
  const responsible = employeesID.responsibleFor[0];
  const specie = species.find((animal) => animal.id === responsible);
  const getOldest = specie.residents.reduce((oldest, current) => 
    (oldest.age > current.age ? oldest : current));
  
  return Object.values(getOldest);
}

module.exports = getOldestFromFirstSpecies;
