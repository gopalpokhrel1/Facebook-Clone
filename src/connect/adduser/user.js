import mongoose from "mongoose";

export const userSchema =  mongoose.Schema({
    firstname:String,
    lastname:String,
    id:Number,
    password:String,
    day:Number,
    month:String,
    yrs:Number,
    gender:String

})

export const UserLogin = mongoose.models.users || mongoose.model('users', userSchema);

