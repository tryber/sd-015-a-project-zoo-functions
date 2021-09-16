const data = require('../data/zoo_data');

const { species } = data;

function defaultObject() {
  return {
    NE: species.filter((animal) => animal.location === 'NE').map((animals) => animals.name),
    NW: species.filter((animal) => animal.location === 'NW').map((animals) => animals.name),
    SE: species.filter((animal) => animal.location === 'SE').map((animals) => animals.name),
    SW: species.filter((animal) => animal.location === 'SW').map((animals) => animals.name),
  };
}

function whithName() {
  return (
    species.reduce((object, specie) => {
      const finalObject = object;

      if (!finalObject[specie.location]) {
        finalObject[specie.location] = [{
          [specie.name]: specie.residents.map((animal) => animal.name),
        }];
      } else {
        const ifExist = { [specie.name]: specie.residents.map((animal) => animal.name) };
        finalObject[specie.location].push(ifExist);
      }
      return finalObject;
    }, {})
  );
}

function nameAndSorted() {
  const object = whithName();

  console.log(object);
  // object.NE = object.NE.map((animal) => console.log(animal));
}

function getAnimalMap(options) {
  if (options === undefined) {
    return defaultObject();
  }
  const { includeNames, sorted } = options;

  if (includeNames && sorted) return nameAndSorted();
  // if (includeNames && sex) return example();
  // if (includeNames && sorted && sex) return example();
  if (includeNames) return whithName();
}
getAnimalMap({ includeNames: true, sorted: true });

module.exports = getAnimalMap;
