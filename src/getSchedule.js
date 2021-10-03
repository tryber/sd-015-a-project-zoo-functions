// consultado o repositorio de vivian ost e a ajuda de amigos d curso
// https://github.com/tryber/sd-015-a-project-zoo-functions/pull/154/commits/328317efc36312da722d2e3a38dee29025147984

const data = require('../data/zoo_data');

const scheduleDay = (Day) => {
  const { open, close } = data.hours[Day];

  const exehibition = [];

  data.species.forEach((Species) => {
    const areavailable = Species.availability.find((weekDay) => weekDay === Day);
    if (areavailable) {
      exehibition.push(Species.name);
    }
  });

  return {
    [Day]: {
      officeHour: open === 0 ? 'CLOSED' : `Open from ${open}am until ${close}pm`,
      exhibition: open === 0 ? 'The zoo will be closed!' : exehibition,
    },
  };
};

const fulSchedule = () => {
  const Fullsche = {};

  Object.entries(data.hours).forEach(([day, dayhours]) => {
    const exhibition = [];
    const { open, close } = dayhours;

    data.species.forEach((specie) => {
      const isExhibit = specie.availability.find((weekDay) => weekDay === day);
      if (isExhibit) exhibition.push(specie.name);
    });

    Fullsche[day] = {
      officeHour: open === 0 ? 'CLOSED' : `Open from ${open}am until ${close}pm`,
      exhibition: open === 0 ? 'The zoo will be closed!' : exhibition,
    };
  });
  return Fullsche;
};

function getSchedule(scheduleTarget) {
  // seu código aqui
  const dayOfWeeky = Object.keys(data.hours).includes(scheduleTarget);
  const Animal = data.species.find((species) => species.name === scheduleTarget);
  if (dayOfWeeky) return scheduleDay(scheduleTarget);
  if (Animal) return Animal.availability;
  return fulSchedule();
}

getSchedule();

module.exports = getSchedule;
