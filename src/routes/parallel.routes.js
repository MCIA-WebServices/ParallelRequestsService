const express = require('express');

const asyncHandler = require('express-async-handler');

const parallelController = require('controllers/parallel.controller');


const router = express.Router();

router.post('/get', asyncHandler(parallelController.get));

router.post('/post', asyncHandler(parallelController.post));


module.exports = router;