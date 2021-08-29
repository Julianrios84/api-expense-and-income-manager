const express = require('express')
const router = express.Router()

const { signIn, signUp } = require('../controllers/auth.controller')

//TODO: Login !
router.post('/signin', signIn)


//TODO: Registrar un usuario
router.post('/signup', signUp)


module.exports = router