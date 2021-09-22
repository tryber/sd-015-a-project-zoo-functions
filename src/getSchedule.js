const data = require('../data/zoo_data');

const getFullSchedule = () => {
  const { species, hours } = data;
  const fullSchedule = { ...hours };
  Object.keys(fullSchedule).forEach((day) => {
    fullSchedule[day] = {
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: species.reduce((list, specie) => {
        if (specie.availability.includes(day)) list.push(specie.name);
        return list;
      }, []),
    };
  });
  fullSchedule.Monday.officeHour = 'CLOSED';
  fullSchedule.Monday.exhibition = 'The zoo will be closed!';
  return fullSchedule;
};

const getOptions = (param) => {
  const { hours, species } = data;
  const options = { weekDay: false, animal: false };
  const animals = species.map((specie) => specie.name);
  if (Object.keys(hours).includes(param)) options.weekDay = true;
  if (animals.includes(param)) options.animal = true;
  return options;
};

const getSpecificSchedule = (scheduleOptions, scheduleTarget, fullSchedule) => {
  const { species } = data;
  if (scheduleOptions.weekDay) {
    return { [scheduleTarget]: fullSchedule[scheduleTarget] };
  }
  if (scheduleOptions.animal) {
    return species.find((specie) => specie.name === scheduleTarget).availability;
  }
};

function getSchedule(scheduleTarget) {
  // seu código aqui
  const fullSchedule = getFullSchedule();
  const scheduleOptions = getOptions(scheduleTarget);
  if (!scheduleOptions || !(scheduleOptions.weekDay || scheduleOptions.animal)) return fullSchedule;
  const specificSchedule = getSpecificSchedule(scheduleOptions, scheduleTarget, fullSchedule);
  return specificSchedule;
}

module.exports = getSchedule;
