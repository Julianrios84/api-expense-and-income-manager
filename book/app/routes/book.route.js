const express = require('express')
const router = express.Router()
const checkOrigin = require('../middlewares/origin.middleware')
const { cacheInit } = require('../middlewares/cache.middleware')
const { getItems, getItem, createItem, deleteItem, updateItem } = require('../controllers/book.controller')

//TODO: Turbo 🐱‍🏍  cache!
router.get('/', getItems)

router.get('/:id', getItem)

router.post('/', createItem)

router.put('/:id', updateItem)

router.delete('/:id', deleteItem)


module.exports = router