const { hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const horario = (dia) => {
  const funcionamento = `Open from ${hours[dia].open}am until ${hours[dia].close - 12}pm`;
  return funcionamento;
};

function getSchedule(dayName) {
  // seu código aqui
  const arr = Object.keys(hours);
  const dias = {};
  if (dayName === undefined) {
    for (let i = 0; i < arr.length - 1; i += 1) {
      dias[arr[i]] = horario(arr[i]);
    }
    dias.Monday = 'CLOSED';
    return dias;
  }
  if (dayName === 'Monday') {
    dias.Monday = 'CLOSED';
    return dias;
  }
  dias[dayName] = horario(dayName);
  return dias;
}

module.exports = getSchedule;
