const express = require('express')
const router = express.Router()
const clientController = require('../controllers/clientController')

router.get('/', clientController.getClients)
router.post('/', clientController.createClient)
router.get('/:id', clientController.getOneClient)
router.put('/:id', clientController.updateClient)
router.delete('/:id', clientController.removeClient)

module.exports = router
