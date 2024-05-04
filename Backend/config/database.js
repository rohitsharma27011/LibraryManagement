const mongoose = require('mongoose');

require('dotenv').config();

const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=> console.log('db connection successful'))
    .catch((err)=>{
        console.log('db connection failed');
        console.error(err.message);
        process.exit(1);
    })
}

module.exports =dbConnect;