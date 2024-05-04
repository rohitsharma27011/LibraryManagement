const express = require('express');
// import cors from 'cors';
const cors = require('cors');

const app = express();

// app.use(cors({
//     origin: 'http://127.0.0.1:5173/',
//     methods: ['GET','POST','PUT','DELETE'],
//     allowedHeaders: ['Content-Type'],
// })
// );


require('dotenv').config();
const PORT = process.env.PORT || 6000;

app.use(express.json());

app.use(cors());

//import routes
const bookRoutes = require('./routes/allBooks');

//mount to API routes
app.use('/books',bookRoutes);

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})

const dbConnect = require('../Backend/config/database');
dbConnect();

app.get('/',(req,res)=>{
    res.send('<h1>This is Book Store home page</h1>')
})
