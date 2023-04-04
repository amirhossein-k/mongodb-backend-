const express = require('express')
const router = express.Router()
const {registerUser,authUser} = require("../Controllers/userControllres")

router.route('/').post(registerUser)
router.route('/login').post(authUser)


module.exports = router