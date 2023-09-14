import mongoose from "mongoose";
import * as dotenv from "dotenv"

dotenv.config()

export const LOCAL_DB = process.env.LOCAL_DB
export const REMOTE_DB = process.env.REMOTE_DB
export const createLocalConnection = async () =>{
    try {
        await mongoose.connect(LOCAL_DB);
        console.log("Connected to Local")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export const createRemoteConnection = async () =>{
    try {
        await mongoose.connect(REMOTE_DB);
        console.log("Connected to mongo atlas remote")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}