const data = require('../data/zoo_data');
const { hours } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const diasEHoras = (Object.entries(hours));
console.log((species.map((element) => element.availability.includes('lions'))));
function getSchedule(scheduleTarget) {
  // sem parametr
  if (scheduleTarget === 'Monday')
  {
    return {Monday: { 'officeHour': 'CLOSED', 'exhibition': 'The zoo will be closed!' }}
  }
  if (!(diasEHoras.some((x) => x[0] === scheduleTarget) || species.some((y) => y.name === scheduleTarget))) {
    return diasEHoras.reduce((dia, hora) => {
      dia[hora[0]] = { 'officeHour': `Open from ${hora[1].open}am until ${hora[1].close}pm`, 'exhibition': species
      .reduce((animaisEmExibiçao, diaDeExibiçao) => {
           diaDeExibiçao.availability.map((diaDaSemana) => diaDaSemana === hora[0]? animaisEmExibiçao.push(diaDeExibiçao.name):null )            
              return animaisEmExibiçao;          
      },[])
      }
      if (hora[0] === 'Monday') {
         dia[hora [0]] = { 'officeHour': 'CLOSED', 'exhibition': 'The zoo will be closed!' }
       }
      return dia;
    },{});
  }
  // dia da semana como parametro
  if (species.find((element) => element.availability.includes(scheduleTarget))) {
     const hora = diasEHoras.find((element) => element[0] === scheduleTarget);
     const obj = { scheduleTarget: {'officeHour': `Open from ${hora[1].open}am until ${hora[1].close}pm`,'exhibition':species.reduce((animaisEmExibiçao, diaDeExibiçao) => {
      diaDeExibiçao.availability.map((diaDaSemana) => diaDaSemana === scheduleTarget? animaisEmExibiçao.push(diaDeExibiçao.name):null)            
                  return animaisEmExibiçao;
        },[])
        }
      }
return obj;
}
// animal como parametro
  if (species.map((animal) =>animal.name ).includes(scheduleTarget)) {
    return species.filter((diasDaSemana) => diasDaSemana.name.includes(scheduleTarget))[0].availability
  }
}

console.log(getSchedule('Tuesday'));

module.exports = getSchedule;