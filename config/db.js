const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

//mongoose.connect(db);   // This will give us a promise. But here we will use async await through the program to make it look synchronous even though sometimes it is asynchronous.
                    // So we will not be using .then() .catch() here since async await is the new standard and is much cleaner


const connectDB = async () =>  {
    try{          
        await mongoose.connect(db,{
            useNewUrlParser:true
        });     // We put await here since connect returns a promise
        console.log('MongoDB connected...');
    } catch(err){  
        console.error(err.message);
        //Exit the process with failure
        process.exit(1);

    }
}  // We need something to call in server js. So we are assigning a const 

module.exports = connectDB;