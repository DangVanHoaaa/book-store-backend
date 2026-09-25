const express = require('express')
const route = express.Router()
const AuthorController = require('../../controllers/client/author.controller')
const {
    checkAuthorExists
} = require('../../middlewares/author.middleware')
route.get('/',AuthorController.getAllAuthorForClient)
route.get('/:id',checkAuthorExists,AuthorController.getAuthorById)

module.exports = route
