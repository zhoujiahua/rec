const express = require('express');
const router = express.Router();

const { spiderInfo } = require('./room');
router.get('/info', spiderInfo)

module.exports = router;