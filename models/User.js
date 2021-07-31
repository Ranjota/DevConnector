//The name of the model starts with a capital letter
const mongoose = require('mongoose');

//avatar attaches a profile image to email  
//Profile will be created later

const UserSchema = new mongoose.Schema({
   name : {
        type:String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }, 
    avatar: {
        type: String
    },
    data:{
       type: Date,
       default: Date.now
    }
});

module.exports = User = mongoose.model('user',UserSchema);