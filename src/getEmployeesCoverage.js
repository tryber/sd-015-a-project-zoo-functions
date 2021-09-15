const data = require('../data/zoo_data');
const animal = require('./getSpeciesByIds');

function getEmployeesCoverage(person = { name: '', id: '' }) {
  const worker = data.employees.filter((employee) => {
    const fullName = `${employee.firstName} ${employee.lastName}`;
    return fullName.includes(person.name) || employee.id.includes(person.id);
  });
  if (worker.length === 0) throw new Error('Informações inválidas');
  const xibil = [];
  for (let index = 0; index < worker.length; index += 1) {
    xibil.push({ id: worker[index].id,
      fullName: `${worker[index].firstName} ${worker[index].lastName}`,
      species: animal(...worker[index].responsibleFor).map((e) => e.name),
      locations: animal(...worker[index].responsibleFor).map((e) => e.location) });
  }
  return (person.name === '' && person.id === '') ? xibil : xibil[0];
}

// console.log(getEmployeesCoverage({ xibil: 'ximira' }));
// console.log(getEmployeesCoverage({ name: 'Spry' }));
// console.log(getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' }));

module.exports = getEmployeesCoverage;
