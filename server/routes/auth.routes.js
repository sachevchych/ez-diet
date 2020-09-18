const {Router} = require('express')
const {check} = require('express-validator')
const ctr = require('../controllers/auth.controller')
const router = Router()


// api/auth/registration
router.post(
    '/registration',
    [
        check('name', "Ім'я не може бути пустим").exists(),
        check('email', 'Некоректна електронна адреса.').isEmail(),
        check('password', 'Пароль не може бути менше ніж 6 символів.').isLength({min: 6})
    ],
    ctr.registration)

router.post(
    '/login',
    [
        check('email', "Не коректна електронна адреса").normalizeEmail().isEmail(),
        check('password', "Пароль не може бути менше ніж 6 символів").isLength({min: 6})
    ],
    ctr.login)

module.exports = router