const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (typeof animal === 'undefined') {
    const speciesTotais = {}; // cria um objeto vazio
    data.species.forEach((specie) => {
      speciesTotais[specie.name] = specie.residents.length; // atribui a chave nome especie para a quantidade da especie que tem esse nome
    });
    return speciesTotais; // qualquer coisa para corrigir o lint
  }

  const totalPorSpecie = data.species.find((obj) => obj.name === animal.specie).residents;

  if (animal.specie && animal.sex) {
    return totalPorSpecie.filter((obj) => obj.sex === animal.sex).length;
  }

  return totalPorSpecie.length;
}

module.exports = countAnimals;
