const data = require('../data/zoo_data');

function countAnimals(animal) {
    let animals = {};
    if (animal === undefined) {
        data.species.forEach((element) => animals[element.name] = element.residents.length);
    } else if (animal.gender === undefined){
        const animalResidentsObject = data.species.filter((element) => animal.specie.includes(element.name))[0].residents;
        return animalResidentsObject.length;
    } else {
        const animalResidentsObject = data.species.filter((element) => animal.specie.includes(element.name))[0].residents;
        return animalResidentsObject.filter((element) => element.sex === `${animal.gender}`).length;
    } return animals;
}

module.exports = countAnimals;
