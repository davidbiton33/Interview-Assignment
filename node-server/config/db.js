const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/assignment'

module.exports = async ()=>{
    // Connect to MongoDB using Mongoose
    try {
        await mongoose.connect(uri);
        console.log("success to connect to MongoDB");
        
    } catch (error) {
        console.log(error);
    }

}