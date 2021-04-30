const express = require('express');
const router = express.Router();

const { spiderList } = require('./spider');
router.get('/splist', spiderList)

module.exports = router;