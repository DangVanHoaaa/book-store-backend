const AuthorService = require('../../services/author.service')

const getAllAuthorForClient = async (req,res) => {
    try{
        const auth = await AuthorService.getAllAuthorforClient()
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
module.exports= {
    getAllAuthorForClient,
    getAuthorById
}