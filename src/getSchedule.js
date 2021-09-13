const data = require('../data/zoo_data');

function openingHours(thatDay) { // Retorna um objeto com os 'openingHours' do Zoo organizado.
  const openHours = {};

  Object.entries(data.hours).forEach((microArray) => {
    openHours[microArray[0]] = `Open from ${microArray[1].open}am until ${microArray[1].close}pm`;
  }); // { Tuesday: 'Open from 8am until 6pm', Wednesday: 'Open from 8am until 6pm', ... }

  return openHours[thatDay];
}

function speciesPresent(thatDay) { // Retorna um array com as espécies que estarão sendo exibidas 'thatDay'. Função callback.
  const filteredSpecies = data.species.filter((specie) => specie.availability.includes(thatDay));
  return filteredSpecies.map((filteredSp) => filteredSp.name);
}

const generalSchedule = { // Timetable semanal do Zoo, alocada em um objeto.
  Tuesday: {
    officeHour: openingHours('Tuesday'), exhibition: speciesPresent('Tuesday'),
  },
  Wednesday: {
    officeHour: openingHours('Wednesday'), exhibition: speciesPresent('Wednesday'),
  },
  Thursday: {
    officeHour: openingHours('Thursday'), exhibition: speciesPresent('Thursday'),
  },
  Friday: {
    officeHour: openingHours('Friday'), exhibition: speciesPresent('Friday'),
  },
  Saturday: {
    officeHour: openingHours('Saturday'), exhibition: speciesPresent('Saturday'),
  },
  Sunday: {
    officeHour: openingHours('Sunday'), exhibition: speciesPresent('Sunday'),
  },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};

function getSchedule(scheduleTarget) {
  const allSpecies = data.species.map((specie) => specie.name); // ['lions', 'bears', 'otters', restOfSpecies]
  const allDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  if (allSpecies.includes(scheduleTarget) === false
    && allDays.includes(scheduleTarget) === false) {
    return generalSchedule;
  } if (allDays.includes(scheduleTarget) === true) {
    return { [scheduleTarget]: generalSchedule[scheduleTarget] };
  } if (allSpecies.includes(scheduleTarget) === true) {
    return data.species.find((specie) => specie.name === scheduleTarget).availability;
  }
}

module.exports = getSchedule;
