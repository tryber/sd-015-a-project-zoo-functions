const { employees, species } = require('../data/zoo_data');

function animalsAndLOcations(ids) {
  return species.reduce((names, animal) => {
    if (ids.includes(animal.id)) {
      names.animals.push(animal.name);
      names.locationAnimal.push(animal.location);
    }
    return names;
  }, { animals: [], locationAnimal: [] });
}

function employer(id) {
  return employees.reduce((listEmployees, employee) => {
    const animals = animalsAndLOcations(employee.responsibleFor);
    const employeeDads = {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: animals.animals,
      locations: animals.locationAnimal,
    };
    const all = [...listEmployees, employeeDads];
    return all;
  }, []);
}

function getEmployeesCoverage(id) {
  if (!id) {
    return employer();
  }
  if (employer().some((iten) => iten.id === id.id)) {
    return employer().find((iten) => iten.id === id.id);
  }
  if (employer().some((iten) => iten.fullName.includes(id.name))) {
    return employer().find((iten) => iten.fullName.includes(id.name));
  }
  throw new Error('Informações inválidas');
}
console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
