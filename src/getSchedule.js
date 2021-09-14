const data = require('../data/zoo_data');

const animals = data.species.map((specie) => specie.name);
const weekDays = Object.keys(data.hours);

function getOfficeHours(day) {
  const hours = Object.values(data.hours[day]);
  if (hours[0] === 0) {
    return 'CLOSED';
  }
  return `Open from ${hours[0]}am until ${hours[1]}pm`;
}

function getAvailability(day) {
  const availableAnml = data.species.filter((specie) => specie.availability.includes(day) === true);
  if (availableAnml.length === 0) {
    return 'The zoo will be closed!';
  }
  return availableAnml.map((specie) => specie.name);
}

function completeSchedule() {
  const result = {};
  weekDays.forEach((day) => {
    result[day] = {
      officeHour: getOfficeHours(day),
      exhibition: getAvailability(day),
    };
  });
  return result;
}

function getDaySchedule(day) {
  const result = {};
  result[day] = {
    officeHour: getOfficeHours(day),
    exhibition: getAvailability(day),
  };
  return result;
}

function getAnimalSchedule(animal) {
  return data.species.find((specie) => specie.name === animal).availability;
}

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (animals.includes(scheduleTarget)) {
    return getAnimalSchedule(scheduleTarget);
  }
  if (weekDays.includes(scheduleTarget)) {
    return getDaySchedule(scheduleTarget);
  }
  return completeSchedule();
}

module.exports = getSchedule;
