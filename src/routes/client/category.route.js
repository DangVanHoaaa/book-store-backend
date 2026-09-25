const express = require('express')
const router = express.Router()
const categoryClientController = require('../../controllers/client/category.controller')
const {checkCategoryExists} = require('../../middlewares/category.middleware')


router.get('/',categoryClientController.getCategoryForClient)
router.get('/:id',checkCategoryExists,categoryClientController.getCategoryById)

module.exports = router