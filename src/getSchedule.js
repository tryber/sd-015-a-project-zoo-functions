const data = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    const allDays = data.hours;
    const animal = data.species.map((specie) => specie.availability);
    console.log(animal);
    const resultado = {};
    Object.keys(allDays).forEach((elemento) => {
      resultado[elemento] = {
        officeHour: `Open from ${elemento}am until 6pm`,
        exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
      };
    });
    return resultado;
  }
}

module.exports = getSchedule;
console.log(getSchedule());
