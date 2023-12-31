import mongoose from "mongoose";


async function connectDB(){

    if(mongoose.connection[0].readyState) return;
       mongoose.set("strictQuery" , false);
       await mongoose.connect(process.env.MONGO_URI);
       console.log("Connected To DB");
}

export default connectDB;