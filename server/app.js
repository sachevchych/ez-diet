const express = require('express')
const next = require('next')
const passport = require('passport')
const jwtStrategy = require('./middleware/passport-strategy')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const session = require('express-session')

const keys = require('./keys/index')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()

    server.use(bodyParser.urlencoded({ extended: true}))
    server.use(bodyParser.json())
    server.use(session({
        secret: 'passport-tutorial',
        cookie: { maxAge: 60000 },
        resave: false,
        saveUninitialized: false
    }))
    server.use(passport.initialize())
    passport.use(jwtStrategy)

    mongoose.connect(keys.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(console.log("MongoDB connected!"))

    server.get('/', (req, res) => {
        return app.render(req, res, '/home', req.query)
    })

    server.get('/registration', (req, res) => {
        return app.render(req, res, '/registration', req.query)
    })

    server.get('/create-recipe', (req, res) => {
        return app.render(req, res, '/create-recipe', req.query)
    })

    server.use('/api/auth', require('./routes/auth.routes'))
    

    server.all('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, (err) => {
        if (err) throw err
        console.log(`Ready on http://localhost:${port}`)
    })
})