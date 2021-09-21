const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const defaultObject = {};
// Pegando dias da semana
const daysOfTheWeek = Object.keys(hours);
// Pegando Array com nome dos animais
const allAnimalsName = species.map((value) => value.name);
// Função que cria mensagem dos horários
const openAndClose = (daysWeek) => {
  if (daysWeek === 'Monday') {
    return 'CLOSED';
  }
  return `Open from ${hours[daysWeek].open}am until ${hours[daysWeek].close}pm`;
};
// Função que cria animais disponíveis no dia
const dayOfTheAnimal = (daysWeek) => {
  if (daysWeek === 'Monday') {
    return 'The zoo will be closed!';
  }
  return species.filter((animal) => animal.availability.includes(daysWeek))
    .map((element) => element.name);
};
// Criando função caso o parâmetro seja um dia
const whatDay = (someDay) => {
  if (someDay === 'Monday') {
    return ({
      [someDay]: {
        officeHour: openAndClose(someDay),
        exhibition: dayOfTheAnimal(someDay),
      },
    });
  }
  return ({
    [someDay]: {
      officeHour: openAndClose(someDay),
      exhibition: dayOfTheAnimal(someDay),
    },
  });
};
// Criando função caso o parâmetro seja um animal
const whatAnimal = (someAnimal) => species.find((value) => value.name === someAnimal).availability;
// Construindo objeto padrao caso não haja parâmetro
const buildingDeafultObject = () => {
  daysOfTheWeek.forEach((value) => {
    defaultObject[value] = {
      officeHour: openAndClose(value),
      exhibition: dayOfTheAnimal(value),
    };
  });
  return defaultObject;
};

function getSchedule(param) {
  if (param === undefined || (!daysOfTheWeek.includes(param) && !allAnimalsName.includes(param))) {
    return buildingDeafultObject();
  }
  if (daysOfTheWeek.includes(param)) {
    return whatDay(param);
  }
  return whatAnimal(param);
}
// console.log(getSchedule());

module.exports = getSchedule;
