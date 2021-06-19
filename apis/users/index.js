const passport = require("passport");
const express = require('express');
const router = express.Router();

const { userLogin, userRegister, userProfile } = require('./users');
router.post('/login', userLogin)
router.post('/register', userRegister)
router.get('/profile', passport.authenticate("jwt", { session: false }), userProfile)

module.exports = router;