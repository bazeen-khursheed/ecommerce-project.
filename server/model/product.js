import mongoose from "mongoose"

const productSchema = mongoose.Schema({
    title: String,
    desc: String,
    price: Number,
    category: String,
    stock: String,
    image: String
})  


const productModel = mongoose.model("products", productSchema)

export default productModel