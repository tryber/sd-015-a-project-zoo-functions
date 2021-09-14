const data = require('../data/zoo_data');

const checaDia = (valor) => Object.keys(data.hours).some((elemento) => elemento === valor);
const checaAnimal = (valor) => data.species.some(({ name }) => name === valor);

const retornoAnimal = (valor) => data.species.find(({ name }) => name === valor).availability;
const rAnimalDia = (dia) => {
  const a = data.species.filter(({ availability }) => availability.some((elm) => elm === dia));
  return a.map((element) => element.name);
};

const retornoDia = (v) => {
  if (v !== 'Monday') {
    const a = data.hours;
    return { officeHour: `Open from ${a[v].open}am until ${a[v].close}pm`,
      exhibition: rAnimalDia(v) };
  }
  return { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
};

const final1 = Object.keys(data.hours).reduce((acc, curr) => {
  acc[curr] = retornoDia(curr);
  return acc;
}, {});
console.log(final1);

function getSchedule(scheduleTarget = 'qualquercoisa') {
  if (checaAnimal(scheduleTarget)) {
    return retornoAnimal(scheduleTarget);
  }
  if (checaDia(scheduleTarget)) {
    return { [scheduleTarget]: retornoDia(scheduleTarget) };
  }
  return final1;
}

module.exports = getSchedule;
