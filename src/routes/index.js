const express = require('express')
const router = express.Router()

const categoryAdminRouter = require('../routes/admin/category.route')
const categoryClientRouter = require('../routes/client/category.route')

const authorsAdminRouter = require('./admin/author.route')

router.use('/admin/categories',categoryAdminRouter)
router.use('/categories',categoryClientRouter)

router.use('/admin/authors',authorsAdminRouter)

module.exports = router