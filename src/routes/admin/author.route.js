const express = require('express')
const router = express.Router()
const AuthorController = require('../../controllers/admin/author.controller')
const {
    checkAuthorExists,
    checkDuplicateName
} = require('../../middlewares/author.middleware')

router.post('/', checkDuplicateName, AuthorController.createAuthor)
router.get('/',AuthorController.getAllAuthorForAdmin)
router.get('/:id',checkAuthorExists,AuthorController.getAuthorById)
router.put('/:id',checkAuthorExists,checkDuplicateName,AuthorController.updateAuthorById)
router.delete('/:id',checkAuthorExists, AuthorController.deleteAuthor)
module.exports = router
