const data = require('../data/zoo_data');

// Function to return the complete schedule of the zoo, discriminating which animals will be available and the opening hours for each day 
function getCompleteSchedule() {
  const { species, hours } = data;
  const completeSchedule = hours;
  Object.keys(completeSchedule).forEach((day) => {
    completeSchedule[day] = {
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: species.reduce((animalsList, specie) => {
        if (specie.availability.includes(day)) animalsList.push(specie.name);
        return animalsList;
      }, []),
    };
  });
  completeSchedule.Monday.officeHour = 'CLOSED';
  completeSchedule.Monday.exhibition = 'The zoo will be closed!';
  return completeSchedule;
}

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) return getCompleteSchedule();
}

// console.log(getCompleteSchedule())
module.exports = getSchedule;
