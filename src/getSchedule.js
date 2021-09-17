const data = require('../data/zoo_data');
// Consultei o repositório do Valdeci de Moura para resolver essa parte.
// Link: https://github.com/tryber/sd-015-a-project-zoo-functions/pull/55/files
const { species, hours } = data; // Usando o object Destructuring, fazemos umas especie de shortcut para as chaves species e hours que estão dentro do zoo_data.js.

const animals = species.map((specie) => specie.name); // Fazemos um array com todos os nomes dos animais do zoologico.

const weekDays = Object.keys(hours); // Fazemos um array com todos os dias da semana.

const printDaySchedule = (day) => { // Essa função é quem irá criar o objeto contendo todas as informações a respeito do horário de funcionamento do zoologico e os animais que estão em exibição.
  const animalsDay = species.filter((specie) => specie.availability.includes(day)); // Primeiro criamos um array contendo todos os animais que estão disponíveis para visitarmos no dia especificado no parâmetro 'day'.

  const hourAvailability = `Open from ${hours[day].open}am until ${hours[day].close}pm`; // Depois, vamos criar uma string, usando template literals, que irá conter os dados referente aos horários de funcionamento do zoológico naquele dia.

  if (day === 'Monday') return { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' }; // Caso o "day" seja Segunda-Feira, vamos criar outro array falando que ele estará fechado.

  return { officeHour: hourAvailability, exhibition: animalsDay.map((animal) => animal.name) }; // Por fim, iremos retornar um objeto contendo todas as informações a respeito do funcionamento do zoologico naquele dia. O objeto irá conter uma chave 'officeHour', sendo o seu valor a string mencionada anteriormente contendo todos os dados referente o horário de funcionamento do zoológico, e uma chave 'exhibition', sendo seu valor um array contendo todos os nomes dos animais que poderão ser vistos naquele dia.
};

const zooSchedule = { // Essa varíável vai criar o objeto contendo todas as informações a respeito do funcionamento do zoológico em um determinado dia da semana.
  Tuesday: printDaySchedule('Tuesday'), // Vai chamar a função printDaySchedule com o parâmetro 'Tuesday' e vai retornar um outro objeto contendo o officeHour e o exhibition referente a esse dia.
  Wednesday: printDaySchedule('Wednesday'),
  Thursday: printDaySchedule('Thursday'),
  Friday: printDaySchedule('Friday'),
  Saturday: printDaySchedule('Saturday'),
  Sunday: printDaySchedule('Sunday'),
  Monday: printDaySchedule('Monday'),
};

function getSchedule(scheduleTarget = '') {
  // seu código aqui
  if (!scheduleTarget) {
    // Sem parâmetros, retorna os horários para cada dia e quais animais estarão disponíveis;
    return zooSchedule;
  }

  if (!animals.includes(scheduleTarget) && !weekDays.includes(scheduleTarget)) { // Se o valor passado no parâmetro scheduleTarget não estiver nem no animals e nem no weekDays, retorna os horários para cada dia e quais animais estarão disponíveis.
    // Com parâmetros que não sejam nem um animal e nem um dia, retorna os horários para cada dia e quais animais estarão disponíveis;
    return zooSchedule;
  }

  if (animals.includes(scheduleTarget)) {
    // Se o nome de um animal for passado, deverá retornar um array com os dias em que ele estará em exibição.
    return species.find((animal) => animal.name === scheduleTarget).availability;
  }
  // Se um único dia for passado, retorna os horários para aquele dia e quais animais estarão disponíveis:
  return { [scheduleTarget]: printDaySchedule(scheduleTarget) };
}
// console.log(getSchedule());
console.log(getSchedule('lions'));
console.log(getSchedule('Monday'));
console.log(getSchedule('Tuesday'));
// console.log(getSchedule('teste'));
module.exports = getSchedule;

// !scheduleTarget = "Não é não? = Sim" "Sim é não? = Não"
// Uma variável vazia é representada como false, uma variável com valor é igual a true. Por isso vc negar uma variável vazia retorna true e negar uma variável com valor retorna false.

// Sem parâmetros, retorna os horários para cada dia e quais animais estarão disponíveis;

// Com parâmetros que não sejam nem um animal e nem um dia, retorna os horários para cada dia e quais animais estarão disponíveis

// Se um único dia for passado, retorna os horários para aquele dia e quais animais estarão disponíveis;

// Se o nome de um animal for passado, deverá retornar um array com os dias em que ele estará em exibição.
