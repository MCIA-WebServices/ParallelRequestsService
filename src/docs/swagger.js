var YAML = require('yamljs');
var swaggerDocument = YAML.load('src/docs/swagger.yaml');
var swaggerUi = require('swagger-ui-express');

var express = require('express');
var router = express.Router();

router.use('/api', swaggerUi.serve);
router.get('/api', swaggerUi.setup(swaggerDocument));

module.exports = router;