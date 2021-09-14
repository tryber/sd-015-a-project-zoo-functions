const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => employees.find((idemployees) => idemployees.id === id).responsibleFor[0];

const animalOlder = ((animaleto) => species.filter((age) => age)
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
console.log(getOldestFromFirstSpecies(burlId));
module.exports = getOldestFromFirstSpecies;


/* .map((firstAnimal) => firstAnimal.responsibleFor[0]); */