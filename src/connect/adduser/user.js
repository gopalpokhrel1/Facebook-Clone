import mongoose from "mongoose";

export const userSchema =  mongoose.Schema({
    firstname:String,
    lastname:String,
    id:Number,
    password:String,
    day:Number,
    gender:String

})

export const UserLogin = mongoose.models.users || mongoose.model('users', userSchema);

