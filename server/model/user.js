import mongoose from "mongoose"

// 1st : Schema
const userSchema = mongoose.Schema({
    name : String,
    email : String,
    password : String,
    phone : Number
})


// 2nd: Model create
const userModel = mongoose.model("users", userSchema)

// 3rd :Export the model
export default userModel