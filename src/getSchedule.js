const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const animais = data.species.map((especie) => especie.name);
const dias = Object.keys(data.hours);

const oppeningTimes = (day) => {
    const time = Object.values(data.hours[day]);
    if (time[0] === 0) {
        return 'CLOSED';
    }
    return `Open from ${time[0]}am until ${time[1]}pm`;
}

const availabilityTime = (day) => {
    const disp = species.filter((especie) => especie.availability.includes(day) ===  true);
    if (disp.length === 0) {
        return 'The zoo will be closed!';
    }
    return disp.map((especie) => especie.name);
}

const allSchedule = () => {
    const resultado = {};
    weekDays.forEach((day) => {
        resultado[day] = {
            officeHour: oppeningTimes(day),
            exib: availabilityTime(day),
        };
    });
    return resultado;
}