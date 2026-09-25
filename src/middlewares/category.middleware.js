const mongoose = require('mongoose')
const Category = require('../models/category.model')

const checkCategoryExists = async (req,res,next) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(400).json({
            success: false,
            message: "Mã ID danh mục không hợp lệ"
        })
    }

    const category = await Category.findOne({_id: id, deleted: false})
    if(!category)
    {
        return res.status(400).json({
            success: false,
            message: "Danh mục không tồn tại hoặc bị xóa"
        })
    }
    req.category = category
    next()
}

const checkDuplicateTitle = async (req,res,next) =>
{
   const { title } = req.body
   const { id } = req.params

   if(!title || title === '')
   {
        return res.status(400).json({
        success: false,
        message: "Tên danh mục không được để trống"
        })
   }

   const query = {title: title.trim() , deleted: false}
   if(id)
   {
        query._id = {$ne: id}
   }
   const existingCategory = await Category.findOne(query)
   if(existingCategory)
   {
    return res.status(400).json({
        success: false,
        message: "Tên danh mục đã tồn tại vui lòng đặt tên khác"
        })
   }
   next()
}
module.exports = {
    checkCategoryExists,
    checkDuplicateTitle
}