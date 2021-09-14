const data = require('../data/zoo_data');

const geral = {};

function assingGeral(x, y) { geral[x] = y.length; }
const noInput = () => {
    data.species.forEach(({ name, residents }) => assingGeral(name, residents));
    return geral;
}


const genderCheck = (animal) =>{
  const { specie, gender } = animal
  const { residents } = data.species.find(({ name }) => name === specie);
  if (!gender) {
    return residents.length;
  }
  const residentsByGenre = residents.filter(({ sex }) => sex === gender);
  return residentsByGenre.length;
}

function countAnimals(animal) {
  // seu código aqui
  if(!animal) {
   return noInput();
  }
  return genderCheck(animal);
}

module.exports = countAnimals;
