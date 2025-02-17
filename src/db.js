import mongoose from "mongoose"
import { config } from "dotenv";

config()

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.DB_URI);
        console.log('connected to db')
    }catch(err){
        throw new Error(err.message)  
    } 
}

export default connectDB;