const data = require('../data/zoo_data');

function getDayAndHour() {
  return data.hours;
}

function getSpecies() {
  return data.species;
}

function isDay(parameter) {
  const days = Object.keys(getDayAndHour());
  return days.includes(parameter);
}

function isAnimal(parameter) {
  const animals = getSpecies().map((animal) => animal.name);
  return animals.includes(parameter);
}

function getParameter(scheduleTarget) {
  if (isAnimal(scheduleTarget)) {
    return 'animal';
  } if (isDay(scheduleTarget)) {
    return 'day';
  }
  return undefined;
}

function isClosed(open, close) {
  return open === 0 && close === 0;
}

function printOfficeHours(open, close) {
  if (isClosed(open, close)) {
    return 'CLOSED';
  }
  return `Open from ${open}am until ${close}pm`;
}

function getAnimals(day, open, close) {
  if (isClosed(open, close)) {
    return 'The zoo will be closed!';
  }
  const animals = getSpecies().filter((animal) => (
    animal.availability.includes(day)
  )).map((animal) => animal.name);
  return animals;
}

function createSchedule() {
  const officeHours = getDayAndHour();
  const days = Object.keys(officeHours);
  const schedule = {};
  days.forEach((day) => {
    const { open, close } = officeHours[day];
    schedule[day] = {
      officeHour: printOfficeHours(open, close),
      exhibition: getAnimals(day, open, close),
    };
  });
  return schedule;
}

function getExhibitionOfDay(schedule, day) {
  const exhibition = {};
  exhibition[day] = schedule[day];
  return exhibition;
}

function getDaysByAnimal(animal) {
  const species = getSpecies();
  const days = species.find((specie) => specie.name === animal).availability;
  return days;
}

function getSchedule(scheduleTarget) {
  const parameter = getParameter(scheduleTarget);
  const schedule = createSchedule();
  if (parameter === 'day') {
    return getExhibitionOfDay(schedule, scheduleTarget);
  } if (parameter === 'animal') {
    return getDaysByAnimal(scheduleTarget);
  }

  return schedule;
}
console.log(getSchedule('penguins'));
module.exports = getSchedule;
