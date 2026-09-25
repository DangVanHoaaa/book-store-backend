const express = require('express')
const router = express.Router()
const categoryAdminController = require('../../controllers/admin/category.controller')
const{
    checkCategoryExists,
    checkDuplicateTitle
} = require('../../middlewares/category.middleware')
router.post('/',checkDuplicateTitle, categoryAdminController.createCategory)
router.get('/',categoryAdminController.getAllCategories)
router.get('/:id',checkCategoryExists, categoryAdminController.getCategoryById)
router.delete('/:id',checkCategoryExists,categoryAdminController.deleteCategoryById)
router.put('/:id',checkCategoryExists,checkDuplicateTitle,categoryAdminController.updateCategory)

module.exports = router