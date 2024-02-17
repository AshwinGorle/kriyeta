import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name : {type : String, required : true, trim : true},
    email : {type : String, required : true, trim : true},
    password : {type : String, required : true, trim : true},
    tc : {type : Boolean, required : true},
    role : {type : String},
    phone : {type : String}
})

const UserModel = mongoose.model('user', userSchema);

export default UserModel;