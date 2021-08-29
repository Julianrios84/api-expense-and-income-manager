const express = require('express')
const router = express.Router()
// const checkOrigin = require('../middlewares/origin.middleware')
const checkAuth = require('../middlewares/auth.middleware')
const checkRoleAuth = require('../middlewares/roleAuth.middleware')
const { getItems, getItem, createItem, deleteItem, updateItem } = require('../controllers/users.controller')

// router.get('/', checkAuth, checkRoleAuth(['admin']), getItems)
router.get('/', getItems)

router.get('/:id', getItem)

router.post('/', createItem)

router.put('/:id', updateItem)

router.delete('/:id', deleteItem)


module.exports = router