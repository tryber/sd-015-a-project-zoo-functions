const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
return ids.reduce((acc, curr) => acc.concat(species.find((element) => element.id === curr)), []);

}

module.exports = getSpeciesByIds;
