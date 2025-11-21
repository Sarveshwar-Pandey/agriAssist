const {signupValidation, loginValidation} = require('../Middlewares/authValidation.middleware')
const {signup, login} = require('../Controllers/auth.controller')
const router = require('express').Router();

router.post('/signup', signupValidation, signup)
router.post('/login', loginValidation, login)

module.exports = router;