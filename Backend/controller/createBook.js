const Book = require('../Models/modelBooks');

exports.createBook = async(req,res) => {
    try{
        const {title,author,publishYear} = req.body;

        const response = Book.create({title,author,publishYear});

        res.status(200).json({
            success: true,
            data: response,
            message: "Entery created successfully "
        })
    }
    catch(err){
        console.group(err);
        console.error(err);
        res.status(500).json({
            success: false,
            data: 'internal server error',
            message: err.message
        })
    }
}