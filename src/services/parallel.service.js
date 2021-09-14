
const fetch = require('node-fetch');

let parallel = {

    get: async (requestsArray) => {
        let promisesArray = requestsArray.map(async request => {
            let response = await fetch(`${request.url}?${request.queryParams}`);
            return await response.json();
        });
        let resultsArray = await Promise.all(promisesArray);
        return resultsArray;
    },

};

module.exports = parallel;