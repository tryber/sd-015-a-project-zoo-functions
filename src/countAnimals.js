const data = require('../data/zoo_data');

function countName(animal) {
  let namespecie = {};
  if (animal.sex === undefined) {
    const relSpecie = data.species.find((element) => element.name === animal.specie);
    namespecie = relSpecie.residents.length;
    return (namespecie);
  }
  const filterResidents = data.species.find((element) => (element.name === animal.specie));
  const arrayResidentes = filterResidents.residents;
  let qte = 0;
  arrayResidentes.forEach((element, index) => {
    if (element.sex === animal.sex) {
      qte += 1;
    }
  });
  return qte;
}

function countAnimals(animal) {
  const namespecie = {};
  if (animal === undefined) {
    data.species.forEach(({ name, residents }) => {
      namespecie[name] = residents.length;
    });
    console.log(namespecie);
    return (namespecie);
  }
  return countName(animal);
}
countAnimals({ specie: 'bears', sex: 'female' });
module.exports = countAnimals;
