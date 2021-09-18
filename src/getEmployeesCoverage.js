const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const findEmployee = (person) => {
  if (Object.keys(person).toString() === 'name') {
    return data.employees.find((elemento) =>
      elemento.firstName === person.name || elemento.lastName === person.name);
  } if (Object.keys(person).toString() === 'id') {
    return data.employees.find((elemento) => elemento.id === person.id);
  }
};

const location = (person) => {
  // const param = findEmployee(person).responsibleFor;
  // const locations = [];
  // for (let i = 0; i < data.species.length; i += 1) {
  //   for (let i2 = 0; i2 < param.length; i2 += 1) {
  //     if (data.species[i].id === param[i2]) {
  //       locations.push(data.species[i].location);
  //     }
  //   }
  // }
  // return locations;
};

const getAnimalName = (id) => id.map((element) =>
  species.find((specie) => specie.id === element).name);
console.log(getAnimalName());

const allEmployerrs = () => {
  const result = [];
  for (let i = 0; i < data.employees.length; i += 1) {
    result.push({
      id: data.employees[i].id,
      fullName: `${data.employees[i].firstName} ${data.employees[i].lastName}`,
      species: '',
      location: location({ name: `${data.employees[i].firstName}` }),
    });
  }
  return result;
};

function getEmployeesCoverage(person) {
  if (person !== undefined) {
    const resultFind = findEmployee(person);
    const resultlocation = location(person);
    return {
      id: resultFind.id,
      fullName: `${resultFind.firstName} ${resultFind.lastName}`,
      species: resultFind.responsibleFor,
      locations: resultlocation,
    };
  } if (person === undefined) {
    return allEmployerrs();
  }
}

module.exports = getEmployeesCoverage;
