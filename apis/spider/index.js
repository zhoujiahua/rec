const passport = require('passport');
const express = require('express');
const router = express.Router();

const { spiderList, spiderCity } = require('./spider');
router.get('/splist', passport.authenticate("jwt", { session: false }), spiderList)
router.get('/spcity', passport.authenticate("jwt", { session: false }), spiderCity)

module.exports = router;