const data = require('../data/zoo_data');

const { species, hours } = data;

const getFullSchedule = () => {
  const zooSchedule = { ...hours };
  const weekDays = Object.keys(zooSchedule);

  weekDays.forEach((day) => {
    zooSchedule[day] = {
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: species.reduce((exhibitionList, specie) => {
        if (specie.availability.includes(day)) exhibitionList.push(specie.name);
        return exhibitionList;
      }, []),
    };
    if (!hours[day].open && !hours[day].close) {
      zooSchedule[day].officeHour = 'CLOSED';
      zooSchedule[day].exhibition = 'The zoo will be closed!';
    }
  });
  return zooSchedule;
};

const getTargetValue = (param) => {
  const parameterIs = { weekDay: false, animal: false };

  const weekDays = Object.keys(hours);
  const animals = species.map((specie) => specie.name);

  if (weekDays.includes(param)) parameterIs.weekDay = true;
  if (animals.includes(param)) parameterIs.animal = true;

  return parameterIs;
};

const getSingleSchedule = (parameterIs, parameter, zooSchedule) => {
  if (parameterIs.weekDay) {
    const dayOfWeek = parameter;
    return { [dayOfWeek]: zooSchedule[dayOfWeek] };
  }
  if (parameterIs.animal) {
    const specieName = parameter;
    return species.find((specie) => specie.name === specieName).availability;
  }
};

function getSchedule(scheduleTarget) {
  const fullSchedule = getFullSchedule();
  const parameterIs = getTargetValue(scheduleTarget);
  if (!(parameterIs.weekDay || parameterIs.animal)) return fullSchedule;
  const singleSchedule = getSingleSchedule(parameterIs, scheduleTarget, fullSchedule);
  return singleSchedule;
}

module.exports = getSchedule;
