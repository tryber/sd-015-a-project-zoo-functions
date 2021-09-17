const data = require('../data/zoo_data');

const horas = data.hours;

const everyDay = () => {
  const daysObj = {};
  Object.keys(horas).forEach((days) => {
    const daayWeek = horas[days];
    if (days === 'Monday') {
      daysObj[days] = {
        officeHour: 'CLOSED', exhibition: 'The zoo will be closed!',
      };
    } else {
      daysObj[days] = ({
        officeHour: `Open from ${daayWeek.open}am until ${daayWeek.close}pm`,
        exhibition: data.species.filter((animal) => animal.availability
          .find((dia) => dia === days))
          .map(({ name }) => name),
      });
    }
  });
  return daysObj;
};

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) return everyDay();
  const day = Object.keys(horas).some((dia) => dia === scheduleTarget);
  const animal = data.species.some((anim) => anim.name === scheduleTarget);
  if (day) return { [scheduleTarget]: everyDay()[scheduleTarget] };
  if (animal) return data.species.find((anim) => anim.name === scheduleTarget).availability;
  return everyDay();
}
console.log(getSchedule());
module.exports = getSchedule;
