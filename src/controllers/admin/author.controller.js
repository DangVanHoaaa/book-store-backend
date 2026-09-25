const AuthorService = require('../../services/author.service')

const createAuthor = async (req, res) => {
    try{
        const author = await AuthorService.createAuthor(req.body)
        res.status(200).json({
            success: true,
            message: "tạo tác giả thành công ",
            data: author
        })
    }
    catch(error)
    {
        res.status(400).json({
            success: false,
            message: error.message,
            
        })
    }

}

const getAllAuthorForAdmin = async (req,res) => {
    try{
        const auth = await AuthorService.getAllAuthorforAdmin()
        res.status(200).json({
            success: true,
            data: auth
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

const getAuthorById = async (req,res) => {
    try{
        const author = await AuthorService.getAuthorById(req.params.id)
        res.status(200).json({
            success: true,
            data: author
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
const updateAuthorById = async (req,res)=>{
    try{
        const author = await AuthorService.updateAuthorById(req.params.id,req.body)
        res.status(200).json({
            success: true,
            data: author
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
const deleteAuthor = async (req,res) => {
    try{
        const author = await AuthorService.deleteAuthor(req.params.id)
        res.status(200).json({
            success: true,
            message: "Xóa thành công tác giả"
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
    createAuthor,
    getAllAuthorForAdmin,
    getAuthorById,
    updateAuthorById,
    deleteAuthor
}
