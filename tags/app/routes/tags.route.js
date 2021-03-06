const express = require('express')
const router = express.Router()
const checkOrigin = require('../middlewares/origin.middleware')
const { cacheInit } = require('../middlewares/cache.middleware')
const { getItems, getItem, createItem, deleteItem, updateItem } = require('../controllers/tags.controller')

//TODO: Turbo ð±âð  cache!
router.get(
    '/',
    cacheInit, //TODO: <--- ð¨ Â¿WTF?
    getItems
)

router.get('/:id', getItem)

router.post('/', cacheInit, createItem)

router.put('/:id', updateItem)

router.delete('/:id', deleteItem)


module.exports = router