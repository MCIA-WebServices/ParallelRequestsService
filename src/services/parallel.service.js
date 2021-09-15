
const fetch = require('node-fetch');

let parallel = {

    get: async (requestsArray) => {
        let promisesArray = requestsArray.map(async request => {
            let url = parseUrl(request.url, request.queryParams);
            let response = await fetch(url);
            return await response.json();
        });
        let resultsArray = await Promise.all(promisesArray);
        return resultsArray;
    },

    post: async (requestsArray) => {
        let promisesArray = requestsArray.map(async request => {
            let url = parseUrl(request.url, request.queryParams);
            let headers = parseHeaders(request.headers);
            let response = await fetch(url,
                {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(request.body)
                });
            return await response.json();
        });
        let resultsArray = await Promise.all(promisesArray);
        return resultsArray;
    }
};

function parseHeaders(headersPairs) {
    let headers = {};
    headersPairs.forEach(header => {
        headers[header.key] = header.value;
    });
    return headers;
}

function parseUrl(url, queryParams) {
    url += queryParams ? `?${queryParams}` : '';
    return url;
}

module.exports = parallel;