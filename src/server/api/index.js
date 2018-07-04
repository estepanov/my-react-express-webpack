const router = require('express').Router()

module.exports = router

router.get('/', (req, res) => {
  res.send('hello from the api!')
})

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
