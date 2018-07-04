require('dotenv').config()
const express = require('express')
const app = express()

const api = require('./api')

const port = process.env.PORT || 8080

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/api', api)

app.listen(port, () => console.log(`Express listening on port ${port}`))
