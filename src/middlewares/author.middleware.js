const mongoose = require('mongoose')
const Author = require('../models/author.model')

const checkAuthorExists = async (req,res,next) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(400).json({
            success: false,
            message: "Mã ID danh mục không hợp lệ"
        })
    }

    const author = await Author.findOne({_id: id, deleted: false})
    if(!author)
    {
        return res.status(400).json({
            success: false,
            message: "Tác giả không tồn tại"
        })
    }
    req.author = author
    next()
}
const checkDuplicateName = async (req,res,next) => {
    const { name } = req.body
    if( !name || name === '')
    {
        return res.status(400).json({
            success: false,
            message: "Tên Tác giả không được để trống"
        })
    }
    next()
}
module.exports = {
    checkAuthorExists,
    checkDuplicateName
}