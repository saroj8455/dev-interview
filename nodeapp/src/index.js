import express from "express"
import {createLocalConnection,createRemoteConnection} from "../config/db.js";
const app = express();
const PORT = 3000 || process.env.PORT
// local address note remove localhost put like 127.0.0.1
// const LOCAL_DB= process.env.LOCAL_DB


// setup db connection
// createLocalConnection();

// setup remote db connection
createRemoteConnection();

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
