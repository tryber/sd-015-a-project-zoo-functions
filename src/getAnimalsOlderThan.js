const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animalsAge = data.species.filter((bicho) => {
    return bicho.name === animal; 
  })
  const toReturn =  animalsAge[0].residents
  console.log(toReturn);
   /* return toReturn.every((ages) => ages >= age); */
}
console.log(getAnimalsOlderThan('tigers'));
module.exports = getAnimalsOlderThan;
