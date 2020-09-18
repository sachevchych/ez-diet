const {validationResult} = require("express-validator")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/user.model')
const keys = require('../keys/index')


module.exports.registration = async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            })
        }

        const {name, email, password} = req.body

        const candidate = await User.findOne({email})
        if (candidate) return res.status(400).json({message: 'Така електронна адреса вже використовується'})

        const hashedPassword = await bcrypt.hashSync(password, 12)
        const user = new User({name, email, password: hashedPassword})
        // TODO Доробити валідну відповідь від сервера
        // const response = await user.save()
        res.status(201).json({message: 'Нового користувача було успішно створено'})
    } catch (e) {
        res.status(500).json({message: 'Виникла помилка'})
    }
}

module.exports.login = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    const {email, password} = req.body

    const user = await User.findOne({email})
    if (!user) return res.status(400).json({message: "Не вірна комбінація електронної адреси та паролю"})

    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if (!isPasswordMatch) return res.status(400).json({message: "Не вірна комбінація електронної адреси та паролю"})

    const token = jwt.sign(
        {userId: user.id},
        keys.JWT_SECRET,
        {expiresIn: '1h'}
    )

    res.json({token, user})
}