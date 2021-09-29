const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  const findAnimal = employees.find((employe) => employe.id === id).responsibleFor[0]; // armazena id animal
  const findSpecie = species.find((specie) => specie.id === findAnimal);
  const oldestSpecie = findSpecie.residents.reduce((res, cur) => {
    if (cur.age > res.age) return cur;
    return res;
  }); //  encontra especie mais velha { name: '-----', sex: '-----', age: ----- }
  return Object.values(oldestSpecie); // converte para array somente com valores
}

// getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');

module.exports = getOldestFromFirstSpecies;
