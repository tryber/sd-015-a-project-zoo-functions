const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const responsibleFor = (id) =>
  employees.filter((iten) => iten.id === id)
    .map((iten) => iten.responsibleFor[0]);

const oldest = (id) => {
  const allAnimals = species.find((iten) => iten.id === responsibleFor(id)[0])
    .residents.sort((a, b) => b.age - a.age);
    return [allAnimals[0].name, allAnimals[0].sex, allAnimals[0].age];
}

console.log(oldest('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

module.exports = oldest;
