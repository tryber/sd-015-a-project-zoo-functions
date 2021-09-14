const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  // seu código aqui
  const days = Object.keys(hours);
  const animals = species.map((specie) => specie.name); 

  if (days.some((day) => day === scheduleTarget)) {

  } else if (animals.some((animal) => animal === scheduleTarget)) {

  } else {
    
  }

  console.log();
  
}

getSchedule();
module.exports = getSchedule;
