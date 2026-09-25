const CategoryServices = require('../../services/category.service')

const getCategoryForClient = async (req,res) => {
    try{
        const category = await CategoryServices.getAllCategoriesForClient()
        res.status(200).json({
            success: true,
            data: category
        })
    }
    catch(error)
    {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}
const getCategoryById = async (req,res) => {
    try{
        const category = await CategoryServices.getCategoryById(req.params.id)
        if( !category || !category.status)
        {
            return res.status(404).json({
                success: false,
                message: 'Danh mục không tồn tại'
            })
        }
        res.status(200).json({
            success: true,
            data: category
        })
    }
    catch(error)
    {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    getCategoryForClient,
    getCategoryById
}