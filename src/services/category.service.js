const Category = require('../models/category.model')

// create Category
const createCategory = async (data) => {
    if (data.title && !data.slug)
    {
         data.slug = data.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ /g, '-')
  
    }
    const category = await Category.create(data)
    return category
}

// get all category for admin
const getAllCategories = async () => {   
        const categories = await Category.find({deleted: {$ne: true}})
        return categories
    
}
//get all category for client
const getAllCategoriesForClient = async () => {
    const categories = await Category.find({status: true, deleted: {$ne: true}})
    return categories
}
// get by id
const getCategoryById = async (id) => {
    const category = await Category.findOne({_id: id, deleted: {$ne: true}})
    return category
}
//update by id 
const updateCategory = async (id, data) => {
    if (data.title && !data.slug)
    {
         data.slug = data.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ /g, '-')
    }
    return Category.findByIdAndUpdate(id, data, {new: true})
}
// delete soft 
const deleteCategoryById = async (id) => {
    const category = await Category.findByIdAndUpdate(id, {deleted: true, deletedAt: new Date()}, {new: true})
    return category
}
module.exports = {
    createCategory,
    getAllCategories,
    getCategoryById,
    deleteCategoryById,
    getAllCategoriesForClient,
    updateCategory
}