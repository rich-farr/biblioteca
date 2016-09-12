const express = require('express')
const router = express.Router()
const Knex = require('knex')
const knexConfig = require('../knexfile')

const knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])

router.get('/', (req, res, next) => {
  return knex.select().from('authors')
  .then(authors => {
    if (authors) {
      res.json(authors)
    } else {
      res.sendStatus(404)
    }
  })
  .catch(err => {
    console.error(err)
    res.json(err)
  })
})

module.exports = router
