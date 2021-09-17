const data = require('../data/zoo_data');

function getDay(day) {
  const objDay = {};

  if (data.hours[day].open === 0) {
    objDay.officeHour = 'CLOSED';
    objDay.exhibition = 'The zoo will be closed!';

    return objDay;
  }

  const hours = data.hours[day];
  const animals = data.species.filter((obj) => obj.availability.includes(day));

  objDay.officeHour = `Open from ${hours.open}am until ${hours.close}pm`;
  objDay.exhibition = animals.map((obj) => obj.name);

  return objDay;
}

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (scheduleTarget === undefined) {
    const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

    const resultado = {};

    days.map((obj) => {
      resultado[obj] = getDay(obj);
      return resultado;
    });

    return resultado;
  }
}

module.exports = getSchedule;
