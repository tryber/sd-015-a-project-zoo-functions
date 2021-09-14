const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
	const animalObject = data.species.filter((element) => animal.includes(element.name));
	const residentsObject = animalObject[0].residents;
	return residentsObject.every((element) => element.age > age);
}

module.exports = getAnimalsOlderThan;
