const Author = require('../models/author.model')


// create author
const createAuthor = async (data) => {
    if (data.name  && !data.slug)
    {
         data.slug = data.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ /g, '-')
    }
    const author = await Author.create(data)
    return author
}
// get all author for admin
const getAllAuthorforAdmin = async () => {
    const author = await Author.find({deleted: {$ne: true}})
    return author
}
//get all category for client
const getAllAuthorforClient = async () => {
    const author = await Author.find({status: 'active', deleted: {$ne: true}})
    return author
}
//get author by id
const getAuthorById = async (id) =>{
    const author = await Author.findOne({_id: id, deleted: false})
    return author
}
//update author
const updateAuthorById = async (id,data) => {
    if (data.name  && !data.slug)
    {
         data.slug = data.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ /g, '-')
    }
    const author = await Author.findByIdAndUpdate(id,data,{new: true})
    return author
}
//delete author
const deleteAuthor = async (id) => {
    const author = await Author.findByIdAndUpdate(id,{deleted: true, deletedAt:new Date()},{new: true})
    return author
}
module.exports = {
    createAuthor,
    getAllAuthorforAdmin,
    getAllAuthorforClient,
    getAuthorById,
    updateAuthorById,
    deleteAuthor
}