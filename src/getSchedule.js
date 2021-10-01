const data = require('../data/zoo_data');
const { hours } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const diasEHoras = (Object.entries(hours));

function dias(scheduleTarget) {
  const hora = diasEHoras.find((element) => element[0] === scheduleTarget);
  const obj = { [scheduleTarget]: {
    officeHour: `Open from ${hora[1].open}am until ${hora[1].close}pm`,
    exhibition: species
      .reduce((animaisEmExibiçao, diaDeExibiçao) => {
        diaDeExibiçao.availability
          .forEach((diaDaSemana) => {
            if (diaDaSemana === scheduleTarget) animaisEmExibiçao.push(diaDeExibiçao.name);
          });
        return animaisEmExibiçao;
      }, []),
  },
  };
  return obj;
}

function animal(scheduleTarget) {
  return species.filter((diasDaSemana) => diasDaSemana.name
    .includes(scheduleTarget))[0].availability;
}

function semParam(sechduleTarget) {
  return diasEHoras.reduce((dia1, hora) => {
    const dia = { ...dia1 };
    dia[hora[0]] = {
      officeHour: `Open from ${hora[1].open}am until ${hora[1].close}pm`,
      exhibition: species
        .reduce((animaisEmExibiçao, diaDeExibiçao) => {
          diaDeExibiçao.availability
            .forEach((diaDaSemana) => {
              if (diaDaSemana === hora[0]) animaisEmExibiçao.push(diaDeExibiçao.name);
            });
          return animaisEmExibiçao;
        }, []),
    };
    if (hora[0] === 'Monday') {
      dia[hora[0]] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    }
    return dia;
  }, {});
}

function getSchedule(scheduleTarget) {
  if (!(diasEHoras.some((dia) => dia[0] === scheduleTarget) || species
    .some((element) => element.name === scheduleTarget))) {
    return semParam(scheduleTarget);
  }
  if (species.find((element) => element.availability.includes(scheduleTarget))) {
    return dias(scheduleTarget);
  }
  if (species.map((animal1) => animal1.name).includes(scheduleTarget)) {
    return animal(scheduleTarget);
  }
  return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
}

console.log(getSchedule());
module.exports = getSchedule;
