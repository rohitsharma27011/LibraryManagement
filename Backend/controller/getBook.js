//import schema
const Book = require('../Models/modelBooks');

//define route handler
exports.getBook = async(req,res) => {
    try{
        
        //insert in the db
        const data = await Book.find({});

        //send a json response with success flag
        res.status(200).json({
            success:true,
            count:data.length,
            data:data,
            message:'Entry fetched successfuly'
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

// exports.getBookbyId = async(req,res) => {
//     try{

//         const id = req.params.id;
        
//         const data = await Book.findById({_id:id});
//         if(!data){
//            return res.status(400).json({
//                 success:false,
//                 data:data,
//                 message:`not exists`
//             })
//         }

//         //send a json response with success flag
//         res.status(200).json({
//             success:true,
//             data:data,
//             message:`Entry fetched successfuly of ${id}`
//         })

//     }
//     catch(err){
//         console.log(err);
//         console.error(err);
//         res.status(500).json({
//             success:false,
//             data:'internal server error',
//             message: err.message
//         })

//     }
// }

