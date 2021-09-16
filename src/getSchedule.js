const data = require('../data/zoo_data');

const animals = data.species.map((specie) => specie.name);
const days = Object.keys(data.hours);

// Function to return the complete schedule of the zoo, discriminating which animals will be available and opening hours for each day
function getCompleteSchedule() {
  const { species, hours } = data;
  const newHours = {};
  Object.keys(hours).forEach((day) => {
    newHours[day] = {
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: species.reduce((animalsList, specie) => {
        if (specie.availability.includes(day)) animalsList.push(specie.name);
        return animalsList;
      }, []),
    };
  });
  newHours.Monday.officeHour = 'CLOSED';
  newHours.Monday.exhibition = 'The zoo will be closed!';
  return newHours;
}

// Function to return the schedule of a specific day
function getDaySchedule(day) {
  const filteredByDay = data.species.filter((specie) => specie.availability.includes(day));
  const availableAnimals = filteredByDay.map((specie) => specie.name);
  const open = (Object.values(Object.entries(data.hours).find((dInf) => dInf[0] === day)[1])[0]);
  const close = (Object.values(Object.entries(data.hours).find((dInf) => dInf[0] === day)[1])[1]);
  const daySchedule = {
    [day]: {
      officeHour: `Open from ${open}am until ${close}pm`,
      exhibition: availableAnimals,
    },
  };
  if (day === 'Monday') {
    return { [day]: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  return daySchedule;
}

// Function to return the available days of a specific animal
function getAnimalSchedule(animal) {
  return data.species.find((specie) => specie.name === animal).availability;
}

// Main function to call another function above acording to each condition
function getSchedule(scheduleTarget) {
  if (!scheduleTarget || (!animals.includes(scheduleTarget) && !days.includes(scheduleTarget))) {
    return getCompleteSchedule();
  }
  if (animals.includes(scheduleTarget)) {
    return getAnimalSchedule(scheduleTarget);
  }
  return getDaySchedule(scheduleTarget);
}

// console.log(getSchedule('qualq'))
module.exports = getSchedule;
