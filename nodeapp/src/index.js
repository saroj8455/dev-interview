import express from "express"
import mongoose from "mongoose";
import * as dotenv from "dotenv"
import {HELLO} from "../utils/message.js"

dotenv.config();

const app = express();
const PORT = 3000 || process.env.PORT
// local address note remove localhost put like 127.0.0.1
const LOCAL_DB= process.env.LOCAL_DB
// remote address
const REMOTE_DB = process.env.REMOTE_DB
// local connection
const test = async ()=> {
try {
    await mongoose.connect(LOCAL_DB);
    console.log("Connected")
} catch (error) {
    console.log(error)
}
}

test();


// make a remote DB connection
const remoteConnection = async () =>{
    try {
        await mongoose.connect(REMOTE_DB);
        console.log("Connected to Remote DB")
    } catch (e) {
        console.log(e)
    }
}
// remoteConnection();












app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hello World App");
})

app.get("/health-check",(req,res)=>{
    res.status(200).json({
        message:"health check done."
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running http://localhost:${PORT}`)
})
