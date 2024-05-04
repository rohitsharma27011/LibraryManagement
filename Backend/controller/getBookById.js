const Book = require('../Models/modelBooks');


exports.getBookById = async (req, res) => {
    try {
        const id = req.params.id;

        const data = await Book.findById(id);

        res.status(200).json({
            success: true,
            data: data,
            message: `Entry fetched successfully for ${id}`
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: 'internal server error',
            message: err.message
        });
    }
};
