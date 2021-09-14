const data = require('../data/zoo_data');

const { species, hours } = data;

function weeklySchedule() {
  return Object.keys(hours).map((weeklyDay) => ({
    [weeklyDay]: {
      officeHour: (hours[weeklyDay].open === 0) ? 'CLOSE'
        : `Open from ${hours[weeklyDay].open} until ${hours[weeklyDay].close}`,

      exhibition: (hours[weeklyDay].open === 0) ? 'The zoo will be closed!' : () => species
          .filter((animalAvaiable) => animalAvaiable.availability.includes(weeklyDay))
          .map((names) => names.name),
    },
  }));
}

console.log(weeklySchedule());
function getSchedule(scheduleTarget) {
  
}

module.exports = getSchedule;
