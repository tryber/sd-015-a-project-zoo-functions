/* eslint-disable array-callback-return */
/* eslint-disable sonarjs/no-identical-functions */
const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const animal = (scheduleTarget) =>
  species.find((specie) => specie.name === scheduleTarget).availability;

const AllDays = () => {
  const horarios = { ...hours };
  Object.keys(horarios).forEach((day) => {
    horarios[day] = {
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: species.reduce((acc, crr) => {
        if (crr.availability.includes(day)) {
          acc.push(crr.name);
        }
        return acc;
      }, []),
    };
  });
  horarios.Monday.officeHour = 'CLOSED';
  horarios.Monday.exhibition = 'The zoo will be closed!';
  return horarios;
};

const dia = (scheduleTarget) => {
  let horarios = { ...hours };
  Object.keys(horarios).find((day) => {
    if (day === scheduleTarget) {
      horarios = {
        officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
        exhibition: species.reduce((acc, crr) => {
          if (crr.availability.includes(day)) {
            acc.push(crr.name);
          }
          return acc;
        }, []),
      };
    }
  });
  const obj = {};
  obj[scheduleTarget] = horarios;
  return obj;
};

const segunda = () => {
  const monday = {
    Monday: {
      officeHour: AllDays().Monday.officeHour,
      exhibition: AllDays().Monday.exhibition,
    },
  };
  return monday;
};

function getSchedule(scheduleTarget) {
  // seu código aqui
  const findAnimal = species.find((specie) => specie.name === scheduleTarget);
  const findDay = Object.keys(hours).includes(scheduleTarget);
  if (typeof findAnimal !== 'undefined') {
    return animal(scheduleTarget);
  }
  if (scheduleTarget === 'Monday') {
    return segunda();
  }
  if (findDay) {
    return dia(scheduleTarget);
  }
  return AllDays();
}

module.exports = getSchedule;

console.log(getSchedule('Monday'));
