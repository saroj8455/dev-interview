import express from "express"
import {HELLO} from "../utils/message.js"

const app = express();
const PORT = 3000 || process.env.PORT

app.get("/",(req,res)=>{
    res.send("Hello World App");
})

app.listen(PORT,()=>{
    console.log(`Server is running http://localhost:${PORT}`)
})
