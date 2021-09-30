const data = require('../data/zoo_data');

function getAnimalsOlderThan(nameSpecie, minimunAge) {
    const residents = data.species.find((param) => {param.name === nameSpecie});
    return residents.every((param1) => param1.age > minimunAge);
}
console.log(getAnimalsOlderThan('lions',10));
module.exports = getAnimalsOlderThan;
