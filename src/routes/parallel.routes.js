const express = require('express');

const asyncHandler = require('express-async-handler');

const parallelController = require('controllers/parallel.controller');


const router = express.Router();

router.get('/', asyncHandler(parallelController.get));



module.exports = router;