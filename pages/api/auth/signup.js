import { hashPassword } from "../../../utils/auth";
import connectDB from "../../../utils/connectDB";
import User from './../../../models/User';

async function handler(req,res){
    if(req.method !== "POST") return;

    try{
        await connectDB();
        console.log("Connected to DB")

    }catch(error){
        console.log(error);
        return res.status(500).json({status :"failed" , message : "Error in connected to DB"});

    }

    const {email , password}= req.body;
    if(!email || !password){
        return res.status(422).json({status : "failed" , message : "Invalid Data"});
    }

    const existingUser = await User.findOne({email : email});
    if(existingUser){
        return res.status(422).json({status:"failed" , message : "User exists already !"});
    }

    const hashedPassword = await hashPassword(password);
    const newUser = await User.create({email : email , password : hashedPassword});
            console.log(newUser);
    res.status(201).json({status : "success" , message : "User Created"});

}

export default handler;