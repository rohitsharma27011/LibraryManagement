const express = require('express');
const router = express.Router();

const {createBook} = require('../controller/createBook');
const {getBook} = require('../controller/getBook');
const {getBookById} = require('../controller/getBookById');
const {updateBook} = require('../controller/updateBook');
const {deleteBook} = require('../controller/deleteBook');


router.post("/createBook",createBook);
router.get("/getBook",getBook);
router.get("/getBookById/:id",getBookById);
router.put("/updateBook/:id",updateBook);
router.delete("/deleteBook/:id",deleteBook);


module.exports = router;