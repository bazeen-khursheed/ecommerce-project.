import express from "express"
// Env = Enviroment Variabe // dotenv
import dotenv from "dotenv"
// pehchan lta he konsi file .env ki he or us file ka data har files me phuncha deta he
dotenv.config()
import userModel from "./model/user.js"
import connectDB from "./config/db.js"
import bcrypt from "bcrypt"
import cors from "cors"
import productModel from "./model/product.js"
const app = express()


// take api se data wo convert json me karde
app.use(express.json())
app.use(cors())

connectDB()
// Port Jisme Hamara Server listen karahah hota he
const PORT = 8080


// Making Api's
// Register POST
app.post("/register", async (req, res) => {
    try {
        // password hash password 
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = await userModel.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            phone: req.body.phone
        })
        res.json({
            message: "User registered!",
            data: user
        })

    } catch (error) {
        console.log(error)
    }
})
app.post("/login", async (req, res) => {
    try {


        const user = await userModel.findOne({ email: req.body.email })
        if (user) {
            const comparePasswd = await bcrypt.compare(req.body.password, user.password) // true //false

            if (comparePasswd === false) {
                res.status(400).json({
                    message: "email and password is not correct!"
                })
            } else {
                res.json({
                    message: "User succesfully login!",
                    data: user
                })
            }
        } else {
            res.status(400).json({
                message: "email and password is not correct!"
            })
        }

    } catch (error) {
        console.log(error)
    }
})

app.get("/getAllUsers", async (req, res) => {
    try {

        const users = await userModel.find()
        res.json({
            data: users
        })
    } catch (error) {
        console.log(error)
    }
})




app.post('/product', async (req, res) => {
  const product = new productModel(req.body);
  const saved = await product.save();
  res.json(saved); 
});

// app.get('/product', (req, res, next) => {
//     res.send('Hello World!');
// });

app.get('/product', async (req, res) => {
  try {
    const products = await productModel.find(); // MongoDB se data
    res.json(products); // Hello World ki jaga data
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.put('/update/:id', async (req, res) => {
    const data = await productModel.findByIdAndUpdate({ _id: req.params.id }, {
        productName: req.body.productName,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
        category: req.body.category,
        stock: req.body.stock

    })
    res.json(data);
});
app.delete('/delete/:id', async (req, res) => {
    const data = await productModel.deleteOne({ _id: req.params.id })
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server is running `);
});



