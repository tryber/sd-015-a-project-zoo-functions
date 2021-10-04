const data = require('../data/zoo_data');

// Requisito construído com base no raciocínio da Virgínia Alcantara.

// Buscamos os nomes dos animais e os dias disponíveis;
// Com o .map, filtramos os animais, criando um novo array com seus nomes.
const namesCreatures = data.species.map((i) => i.name);
const daysAvailability = [
  'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

// Essa função, com a variavel 'animals' procura os animais, filtra a informação retornando 'true' se pelomenos um elemento satisfaz a condição.
// A variável 'hour', escreve a informação solicitada através de Template Literals, seguindo do 'if' que também faz a alusão ao elemento, vendo a possibilidade do zoologico ficar fechado(d === 'mondey', return....).

const TakeDay = (d) => {
  const animals = data.species.filter((a) => a.availability.some((i) => i === d));
  const hour = `Open from ${data.hours[d].open}am until ${data.hours[d].close}pm`;
  if (d === 'Monday') return { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return { officeHour: hour, exhibition: animals.map((i) => i.name) };
};

// Esta variável, declara os dias em objeto de acordo com a função que constrói a informação da viablidade dos animais e seus dias;

const crono = {
  Tuesday: TakeDay('Tuesday'),
  Wednesday: TakeDay('Wednesday'),
  Thursday: TakeDay('Thursday'),
  Friday: TakeDay('Friday'),
  Saturday: TakeDay('Saturday'),
  Sunday: TakeDay('Sunday'),
  Monday: TakeDay('Monday'),
};

// Função padrão que faz as perguntas, vendo a possibilidade das informações serem verdadeiras ou não, possibilitando o retorno dos dias dos animais e sua viabilidade.

function getSchedule(event) {
  if (!event) return crono;
  if (!namesCreatures.some((i) => event === i)
  && !daysAvailability.some((i) => event === i)) return crono;
  if (namesCreatures.some((i) => event === i)) {
    return data.species.find((e) => e.name === event).availability;
  }
  return { [event]: TakeDay(event) };
}

module.exports = getSchedule;
