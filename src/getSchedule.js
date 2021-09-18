const { hours, species } = require('../data/zoo_data');

const exibitionAnimal = (currenteValue) => {
  let resposta;
  if (currenteValue === 'Monday') {
    resposta = 'The zoo will be closed!';
  } else {
    resposta = species.filter((animals) =>
      animals.availability.includes(currenteValue)).map((nameAnimals) =>
      nameAnimals.name);
  }
  return resposta;
};

const officeHour = (currenteValue) => {
  let resposta;
  if (currenteValue === 'Monday') {
    resposta = 'CLOSED';
  } else {
    resposta = `Open from ${hours[currenteValue].open}am until ${hours[currenteValue].close}pm`;
  }
  return resposta;
};

function scheduleZoo() {
  const result = Object.keys(hours).reduce((acc, currenteValue) => {
    acc[currenteValue] = { officeHour: officeHour(currenteValue),
      exhibition: exibitionAnimal(currenteValue) };
    return acc;
  }, {});
  return result;
}

const calender = (params) => species.find((elemento) => elemento.name === params).availability;

function getSchedule(scheduleTarget) {
  const day = Object.keys(hours);
  const animals = species.map((element) => element.name);
  if (!scheduleTarget || (!day.includes(scheduleTarget) && !animals.includes(scheduleTarget))) {
    return scheduleZoo();
  }
  if (day.includes(scheduleTarget)) {
    const resposta = {};
    resposta[scheduleTarget] = scheduleZoo()[scheduleTarget];
    return resposta;
  }
  return calender(scheduleTarget);
}

module.exports = getSchedule;
