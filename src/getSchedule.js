
const data = require('../data/zoo_data');

const animals = data.species.map((specie) => specie.name);
const week = Object.keys(data.hours);

function officeHours(day) {
  const hours = Object.values(data.hours[day]);
  if (hours[0] === 0) {
    return 'CLOSED';
  }
  return `Open from ${hours[0]}am until ${hours[1]}pm`;
}

function availability(day) {
  const avbleAnimal = data.species.filter((specie) => specie.availability.includes(day) === true);
  if (avbleAnimal.length === 0) {
    return 'The zoo will be closed!';
  }
  return avbleAnimal.map((specie) => specie.name);
}

function completeSchedule() {
  const result = {};
  week.forEach((day) => {
    result[day] = {
      officeHour: officeHours(day),
      exhibition: availability(day),
    };
  });
  return result;
}

function daySchedule(day) {
  const result = {};
  result[day] = {
    officeHour: officeHours(day),
    exhibition: availability(day),
  };
  return result;
}

function animalSchedule(animal) {
  return data.species.find((specie) => specie.name === animal).availability;
}

function getSchedule(dayName) {
  // seu código aqui
  if (animals.includes(dayName)) {
    return animalSchedule(dayName);
  }
  if (week.includes(dayName)) {
    return daySchedule(dayName);
  }
  return completeSchedule();
}

module.exports = getSchedule;
