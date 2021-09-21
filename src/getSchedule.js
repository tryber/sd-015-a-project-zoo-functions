const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const animals = species.map((specie) => specie.name);
const week = Object.keys(hours);

function getOfficeHours(day) {
  if (hours[day] === 0) {
    return 'CLOSED';
  }
  return `Open from ${hours[0]}am until ${hours[1]}pm`;
}

function getAvailability(day) {
  const availableAnimal = species.filter((specie) => specie.availability.includes(day) === true);
  if (availableAnimal.length === 0) {
    return 'The zoo will be closed!';
  }
  return availableAnimal.map((specie) => specie.name);
}

function completeSchedule() {
  const result = {};
  week.forEach((day) => {
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
  return species.find((specie) => specie.name === animal).availability;
}

function getSchedule(dayName) {
  // seu código aqui
  if (animals.includes(dayName)) {
    return getAnimalSchedule(dayName);
  }
  if (week.includes(dayName)) {
    return getDaySchedule(dayName);
  }
  return completeSchedule();
}

module.exports = getSchedule;
