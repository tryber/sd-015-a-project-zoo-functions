const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => data.species
.find((specie) => specie.name === animal).residents
.every((resident) => resident.age > age);
//transformada a função em uma arrow-function.. que recebe dois parametros(animal,age).. busca coma função find entre as especies o nome da especie. Logo busca entre os residentes daquela espécie, se todos tem a idade minima especificada.
console.log(getAnimalsOlderThan('otters', 7))//ERRO NESTE TESTE
module.exports = getAnimalsOlderThan;
