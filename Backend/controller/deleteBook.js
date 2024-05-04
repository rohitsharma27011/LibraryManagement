//import schema
const Book = require('../Models/modelBooks')

//define route handler
exports.deleteBook = async(req,res) => {
    try{
        //extract title and description from response body
        const {id} = req.params;
        const {title,author} = req.body;

        //insert in the db
        const data = await Book.findByIdAndDelete(
            {_id:id},
            {title,author},
        );

        //send a json response with success flag
        res.status(200).json({
            success:true,
            data:data,
            message:'Entry deleted successfuly'
        })

    }
    catch(err){
        console.log(err);
        console.error(err);
        res.status(500).json({
            success:false,
            data:'internal server error',
            message: err.message
        })

    }
}