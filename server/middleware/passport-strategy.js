const {Strategy, ExtractJwt} = require('passport-jwt')
const User = require('../models/user.model')
const { JWT_SECRET } = require('../keys/index')

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET
}

const jwtStrategy = new Strategy(options, async (payload, done) => {
    try {
        const candidate = await User.findById(payload.userId).select('id')

        if (candidate) {
            done(null, candidate)
        } else {
            done(null, false)
        }
    } catch (e) {
        console.error(e)
    }
})

module.exports = jwtStrategy