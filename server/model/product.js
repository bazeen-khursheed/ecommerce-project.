import mongoose from "mongoose"

// 1st : Schema
const productSchema = mongoose.Schema({
    productname : String,
    description : String,
    price : Number,
    image : String
})


// 2nd: Model create
const productModel = mongoose.model("products", productSchema)

// 3rd :Export the model
export default productModel