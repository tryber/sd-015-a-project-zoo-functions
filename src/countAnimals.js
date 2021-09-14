const data = require('../data/zoo_data');

// Function to create an object containing all species and the respective quantity if the user enter undefined value
function countAll() {
  const { species } = data;
  const specieList = {};
  species.forEach(({ name, residents }) => {
    specieList[name] = residents.length;
  });
  return specieList;
}

// Function to return the quantity of animals of a specific specie
function countSpecie(specie) {
  const { species } = data;
  return species.find((info) => info.name === specie).residents.length;
}

// Function to return the quantity of animals of specific specie and gender
function countGender(specie, gender) {
  const { species } = data;
  const foundSpecie = species.find((info) => info.name === specie);
  return foundSpecie.residents.filter((info) => info.sex === gender).length;
}

// Main function to call a function above acording to each condition
function countAnimals(animal) {
  if (!animal) {
    return countAll();
  }
  const { specie = false, gender = false } = animal;
  if (!gender) {
    return countSpecie(specie);
  }
  return countGender(specie, gender);
}

// console.log(countGender('lions', 'male'));
// console.log(countSpecie('lions'));
// console.log(countAnimals());
module.exports = countAnimals;
