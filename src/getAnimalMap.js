const { species } = require('../data/zoo_data');
const { residents } = require('../data/zoo_data');

function getAnimalMap(options) {
  const allLocations = species.map((iten) => iten.location)
  const allLocation = allLocations.filter((este, i) => allLocations.indexOf(este) === i);

  if (options === undefined) {
    const animals = {
      NE: species.filter((iten) => iten.location === 'NE').map((iten) => iten.name),
      NW: species.filter((iten) => iten.location === 'NW').map((iten) => iten.name),
      SE: species.filter((iten) => iten.location === 'SE').map((iten) => iten.name),
      SW: species.filter((iten) => iten.location === 'SW').map((iten) => iten.name),
    };
    return animals;
  }
  
   const getAnimals = species.filter((iten) => iten.location === 'NE').map((specie) => ({
    [specie.name]: species.find((ite) => ite.name === specie.name).residents.map((speci) => speci.name)
  }));
  if (options.includeNames === true) {
    const animals = {
      NE: species.filter((iten) => iten.location === 'NE').map((specie) => ({
        [specie.name]: species.find((ite) => ite.name === specie.name).residents.map((speci) => speci.name)})),
    };
    return animals;
  };
  }
console.log(getAnimalMap({ includeNames: true }));

module.exports = getAnimalMap;
