const express = require('express');
const router = express.Router();

const { spiderInfo, cityList } = require('./room');
router.get('/info', spiderInfo)
router.get('/citys', cityList)

module.exports = router;