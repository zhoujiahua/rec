const express = require('express');
const router = express.Router();

const { spiderList, spiderCity } = require('./spider');
router.get('/splist', spiderList)
router.get('/spcity', spiderCity)

module.exports = router;