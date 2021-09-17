const data = require('../data/zoo_data');

const retornaOfficeHour = (diaDaSemana) => {
  const dadosDoDIa = Object.entries(data.hours);
  const dadosAbertura = dadosDoDIa.find((dia) => dia[0] === diaDaSemana);
  console.log(dadosAbertura);
};

const retornaExhibition = (diaDaSemana) => {
  const animaisHoje = [];
  data.species.forEach((bicho) => {
    if (bicho.availability.includes(diaDaSemana)) {
      animaisHoje.push(bicho.name);
    }
  });
  console.log(animaisHoje);
  return animaisHoje;
}

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    return 0;
  }
}

// 'Monday': { 'officeHour': 'CLOSED', 'exhibition': 'The zoo will be closed!' },

retornaOfficeHour('Wednesday');
retornaExhibition('wednesday');

module.exports = getSchedule;
