const data = require('../data/zoo_data');
const { species, id } = require('../data/zoo_data')

/* function getSpeciesByIds(...ids) {
    const log = species.filter(({ id }) => ids.includes(id))
    return log
}  */

function getSpeciesByIds(...ids) {
   
    const log = species.filter(({ id }) => ids.includes(id))
    return log
}


module.exports = getSpeciesByIds;
