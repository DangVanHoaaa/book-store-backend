const express = require('express')
const router = express.Router()
const categoryClientController = require('../../controllers/client/category.controller')

router.get('/',categoryClientController.getCategoryForClient)
router.get('/:id',categoryClientController.getCategoryById)

module.exports = router