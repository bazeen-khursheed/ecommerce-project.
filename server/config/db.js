import mongoose from "mongoose";

const connectDB = () => {
    mongoose.connect(process.env.MONGODB).then((res) =>{
        console.log("mongodb connected");
    }).catch((err) =>{
        console.log(err);
    })
}

export default connectDB