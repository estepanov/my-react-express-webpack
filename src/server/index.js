require('dotenv').config()
const express = require('express')
const compression = require('compression')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const morgan = require('morgan')
const app = express()

const api = require('./api')

const port = process.env.PORT || 8080

app.use(compression())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(helmet())
app.use(morgan('combined'))

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/api', api)

app.listen(port, () => console.log(`Express listening on port ${port}`))
