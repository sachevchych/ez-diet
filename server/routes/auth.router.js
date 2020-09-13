const {Router} = require('express')
const User = require('../models/user.model')
const router = Router()


// api/auth/registration
router.post('/registration', async (req, res) => {
    try {
        console.log(req.body.login, req.body.password)
        res.status(201).json({ message: 'All fine'})
    } catch (e) {
        res.status(500).json({ message: 'Something goes wrong'})
    }
})

module.exports = router