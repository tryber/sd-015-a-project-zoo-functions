const data = require('../data/zoo_data');
const { hours, species } = require('../data/zoo_data');

const animalAvailability = species.map((specie) => [specie.name, specie.availability]);
function animalExhibition(day) {
  return animalAvailability.map((animal) => {
    if (animal[1].includes(day)) {
      return animal[0];
    }
    return 0;
  }).filter((item) => item !== 0);
}
function defaultResult() {
  return Object.entries(hours).reduce((acc, day) => {
    const [dayOfWeek, { open, close }] = day;
    if (dayOfWeek === 'Monday') {
      return {
        ...acc,
        [dayOfWeek]: {
          officeHour: 'CLOSED',
          exhibition: 'The zoo will be closed!',
        } };
    }
    return {
      ...acc,
      [dayOfWeek]: {
        officeHour: `Open from ${open}am until ${close}pm`,
        exhibition: animalExhibition(dayOfWeek),
      } };
  }, {});
}

function isAnimal(item) {
  return species.map((animal) => animal.name).includes(item);
}

function isDay(item) {
  return Object.keys(hours).map((day) => day).includes(item);
}

function getSchedule(input) {
  if (input === undefined) return defaultResult();

  if (isDay(input) === true) {
    return {
      [input]: defaultResult()[input] };
  }

  if (isAnimal(input) === true) {
    return animalAvailability.filter((animal) => animal[0] === input)[0][1];
  }
  return defaultResult();
}

module.exports = getSchedule;
