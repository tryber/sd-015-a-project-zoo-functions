const { hours, species } = require('../data/zoo_data');

const days = Object.keys(hours);

const getAllDays = () => {
  // const days = Object.keys(hours);

  const allDays = days.reduce((acc, day) => {
    acc[day] = {
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: species.filter((spe) => spe.availability.includes(day)).map((ani) => ani.name),
    };
    acc.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    return acc;
  }, {});

  return allDays;
};

const getChosenDay = (day) => ({ [day]: getAllDays()[day] });

const daysExhibOfSingleAnimal = (animal) => (species
  .find((spe) => spe.name === animal).availability);

function getSchedule(scheduleTarget) {
  const nameAnimals = species.map((spe) => spe.name);

  if (days.includes(scheduleTarget)) return getChosenDay(scheduleTarget);
  if (nameAnimals.includes(scheduleTarget)) return daysExhibOfSingleAnimal(scheduleTarget);

  return getAllDays();
}

module.exports = getSchedule;
