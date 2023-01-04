import express from "express"
// const express = required ("express")
import cors from "cors"
import mongoose from "mongoose"


const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())


mongoose.connect('mongodb://localhost:27017/Login',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB COnnected")
});

//schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})
//module
const User = new mongoose.model("User",userSchema)




// app.use(bodyParser.urlencoded({ extended: true }));
//Routes
app.post("/login",(req, res)=> {
    // console.log(req.body)
    // res.send("my API Login")
    const {name, email, password} = req.body
    const user = new User({
        name,
        email,
        password
    })
    user.save(err => {
        if(err){
            res.send(err)
        } else {
            res.send({message: "successfull register"})
        }
    })

})

app.post("/Register",(req, res)=> {
    res.send("my API Register")
})

app.listen(9002,()=>{
    console.log("running on 9002")
})


