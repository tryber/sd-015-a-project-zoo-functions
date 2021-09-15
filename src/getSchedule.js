const { species, hours } = require('../data/zoo_data');

const isDayOfWeek = (valueToCheck) =>
  Object.keys(hours).some((weekDay) => weekDay === valueToCheck);

const isAnimal = (valueToCheck) => species.some(({ name }) => name === valueToCheck);

const createMondayStatus = () => ({ officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' });

const createAvailableAnimalsArr = (weekDay) =>
  species.reduce((acc, { name, availability }) => {
    if (availability.includes(weekDay)) acc.push(name);
    return acc;
  }, []);

const createBaseSchedule = () =>
  Object.entries(hours).reduce((acc, [weekDay, { open, close }]) => {
    if (weekDay === 'Monday') {
      acc[weekDay] = createMondayStatus();
    } else {
      acc[weekDay] = {
        officeHour: `Open from ${open}am until ${close}pm`,
        exhibition: createAvailableAnimalsArr(weekDay),
      };
    }
    return acc;
  }, {});

const createWeekDaySchedule = ((weekDay) => {
  if (weekDay === 'Monday') return { [weekDay]: createMondayStatus() };

  const [, { open, close }] = Object.entries((hours)).find(([day]) => weekDay === day);

  return { [weekDay]: {
    officeHour: `Open from ${open}am until ${close}pm`,
    exhibition: createAvailableAnimalsArr(weekDay),
  } };
});

const createAnimalSchedule = (animal) => species.reduce((acc, { name, availability }) =>
  (name === animal
    ? [...acc, ...availability]
    : acc
  ), []);

const getSchedule = (scheduleTarget = false) => {
  if (!scheduleTarget || (!isDayOfWeek(scheduleTarget) && !isAnimal(scheduleTarget))) {
    return createBaseSchedule();
  }

  if (isDayOfWeek(scheduleTarget)) return createWeekDaySchedule(scheduleTarget);

  return createAnimalSchedule(scheduleTarget);
};

module.exports = getSchedule;
