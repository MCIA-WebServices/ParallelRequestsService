
const apiRes = require('helpers/response');

const parallelService = require('services/parallel.service');


let parallelController = {

    get: async (req, res) => {
        res.send(apiRes.success('Execution results', await parallelService.get(req.body)));
    },
    
};


module.exports = parallelController;