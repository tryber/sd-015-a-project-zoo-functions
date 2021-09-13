const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

function allSchedule() {
  const object = {};
  days.forEach((day) => {
    const animalAvaible = species.filter((animal) => animal.availability.includes(day));
    if (day === 'Monday') {
      object[day] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      object[day] = {
        officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
        exhibition: animalAvaible.map((element) => element.name),
      };
    }
  });
  return object;
}

function daySchedule(scheduleTarget) {
  const animalAvaible = species.filter((animal) => animal.availability.includes(scheduleTarget));
  const object = {};
  if (scheduleTarget === 'Monday') {
    object[scheduleTarget] = {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
    return object;
  }
  object[scheduleTarget] = {
    officeHour: `Open from ${hours[scheduleTarget].open}am until ${hours[scheduleTarget].close}pm`,
    exhibition: animalAvaible.map((element) => element.name),
  };
  return object;
}

function animalSchedule(animal) {
  const animalObject = species.find((element) => element.name === animal);
  return animalObject.availability;
}

function getSchedule(scheduleTarget) {
  const animalCheck = species.some((element) => element.name === scheduleTarget);
  const dayCheck = days.some((element) => element === scheduleTarget);
  if (scheduleTarget === undefined || (animalCheck === false && dayCheck === false)) {
    return allSchedule();
  }
  if (dayCheck) {
    return daySchedule(scheduleTarget);
  }
  return animalSchedule(scheduleTarget);
}

console.log(getSchedule('penguins'));

module.exports = getSchedule;
