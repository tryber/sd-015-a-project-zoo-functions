const data = require('../data/zoo_data');

function verifyHour(day) {
  const allDays = data.hours;
  const daysEntries = Object.entries(allDays);
  const dayMap = daysEntries.filter((element) => element[0] === day);
  if (day === 'Monday') {
    return 'CLOSED';
  }
  return `Open from ${dayMap[0][1].open}am until ${dayMap[0][1].close}pm`;
}

function verifyExhibition(day) {
  const animals = data.species;
  const filterAnimals = animals.filter((specie) => specie.availability.includes(day));
  const mapAnimals = filterAnimals.map((specie) => specie.name);
  if (day === 'Monday') {
    return 'The zoo will be closed!';
  } return mapAnimals;
}

function returnObject() {
  const allDays = data.hours;
  const objDays = {};
  Object.entries(allDays).forEach((elementDay) => {
    objDays[elementDay[0]] = {
      officeHour: verifyHour(elementDay[0]),
      exhibition: verifyExhibition(elementDay[0]),
    };
  });
  return objDays;
}

function filterDay(day) {
  const objDay = returnObject();
  const entriesObjDay = Object.entries(objDay).filter((element) => element.includes(day));
  const objFiltered = {};
  entriesObjDay.forEach((element) => {
    objFiltered[element[0]] = {
      officeHour: verifyHour(element[0]),
      exhibition: verifyExhibition(element[0]),
    };
  });
  return objFiltered;
}

function verifyAnimalByDay(animal) {
  const filterAnimal = data.species.find((specie) => specie.name === animal);
  return filterAnimal.availability;
}

function getSchedule(scheduleTarget) {
  const allAnimals = data.species.map((specie) => specie.name);
  const days = Object.keys(data.hours);
  const dayAndAnimals = [...allAnimals, ...days];
  if (!scheduleTarget) {
    return returnObject();
  } if (dayAndAnimals.includes(scheduleTarget) === false) {
    return returnObject();
  } if (days.includes(scheduleTarget)) {
    return filterDay(scheduleTarget);
  } if (allAnimals.includes(scheduleTarget)) {
    return verifyAnimalByDay(scheduleTarget);
  }
}

module.exports = getSchedule;
console.log(getSchedule('lions'));
