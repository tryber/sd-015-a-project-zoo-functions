const data = require('../data/zoo_data');

const { species, hours } = data;
const daysOfWeek = Object.keys(hours);

function getSpeciesList() {
  const speciesList = [];
  species.forEach((specie) => {
    speciesList.push(specie.name);
  });
  return speciesList;
}

function getHour(whichDay) {
  const hourOfDay = hours[whichDay];
  return hourOfDay;
}

// const sumNumbers = (array) => array.filter(getEven).reduce(sumPair)
function getAnimalsOfDay(weekDay) {
  const result = [];
  const specieResidents = species.filter((specie) => specie.availability.includes(weekDay));
  specieResidents.forEach((element) => {
    result.push(element.name);
  });
  return result;
}

function completeSchedule() {
  const fullSchedule = daysOfWeek.map((day) => ({
    [day]: {
      officeHour: `Open from ${getHour(day).open}am until ${
        getHour(day).close
      }pm`,
      exhibition: getAnimalsOfDay(day),
    },
  })).reduce((acc, item) => {
    const key = Object.keys(item)[0];
    acc[key] = item[key];
    return acc;
  }, {});
  fullSchedule.Monday.officeHour = 'CLOSED';
  fullSchedule.Monday.exhibition = 'The zoo will be closed!';
  return fullSchedule;
}

function getSchedule(scheduleTarget) {
  let result;
  if (daysOfWeek.includes(scheduleTarget)) {
    const fullSchedule = completeSchedule();
    result = { [scheduleTarget]: fullSchedule[scheduleTarget] };
    // console.log(`its an weekday: ${scheduleTarget}`);
  } else if (getSpeciesList().includes(scheduleTarget)) {
    result = species.find((whichAnimal) =>
      whichAnimal.name === scheduleTarget).availability;
  } else {
    result = completeSchedule();
  }
  // console.log(scheduleTarget);
  // console.log(result);
  return result;
}

module.exports = getSchedule;
