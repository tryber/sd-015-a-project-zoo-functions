const data = require('../data/zoo_data');

function groupByLocation() {
  return data.species.reduce((groups, specie) => {
    const group = (groups[specie.location] || []);
    group.push(specie.name);
    Object.assign(groups, { [specie.location]: group });
    return groups;
  }, {});
}

function groupWithOptions(sex, sorted) {
  return data.species.reduce((groups, specie) => {
    const group = (groups[specie.location] || []);
    let residents = [...specie.residents];
    if (sex) {
      residents = residents.filter((resident) => resident.sex === sex);
    }
    residents = residents.map((resident) => resident.name);
    if (sorted) {
      residents.sort();
    }
    group.push({ [specie.name]: residents });
    Object.assign(groups, { [specie.location]: group });
    return groups;
  }, {});
}

function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return groupByLocation();
  }
  return groupWithOptions(options.sex, options.sorted);
}

module.exports = getAnimalMap;
